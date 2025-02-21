require('dotenv').config();
const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const cors = require('cors');
const integrationSpec = require('./telexSpecConfig');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// AWS Configuration
const polly = new AWS.Polly({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
});
const S3_BUCKET = process.env.S3_BUCKET;

async function generateAudio(text) {
    try {
        const params = {
            Text: text,
            OutputFormat: "mp3",
            VoiceId: "Joanna" // Change this to another voice if needed
        };
        
        const data = await polly.synthesizeSpeech(params).promise();
        return data.AudioStream;
    } catch (error) {
        console.error("Error generating audio:", error);
        return null;
    }
}

async function uploadToS3(audioData, fileName) {
    const filePath = `audio/${fileName}.mp3`;
    const params = {
        Bucket: S3_BUCKET,
        Key: filePath,
        Body: audioData,
        ContentType: "audio/mpeg",
    };
    await s3.upload(params).promise();
    return `https://${S3_BUCKET}.s3.amazonaws.com/${filePath}`;
}

app.post("/text-to-speech", async (req, res) => {
    const { message, channel_id } = req.body;
    if (!message) return res.status(400).json({ error: "No message provided" });
    
    const audioData = await generateAudio(message);
    if (!audioData) return res.status(500).json({ error: "Failed to generate audio" });
    
    const audioUrl = await uploadToS3(audioData, `message_${channel_id}`);
    const modifiedMessage = `${message} [Listen to this message](${audioUrl})`;
    
    res.json({ message: modifiedMessage, channel_id });
});

app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

app.get("/integration-Spec", (req, res) => {
    res.json(integrationSpec);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
