const url = "https://9mznbl2f-5000.uks1.devtunnels.ms/";

const integrationSpec =
{
    "data": {
      "date": {
        "created_at": "2025-02-21",
        "updated_at": "2025-02-21"
      },
      "descriptions": {
        "app_description": "Converts text messages into audio files and provides a link to the audio.",
        "app_logo": "https://i.ibb.co/mrzP66gj/Text-to-speech.png",
        "app_name": "text-to-speech",
        "app_url": "URL to the application or service.",
        "background_color": "#4169E1"
      },
      "integration_category": "Monitoring & Logging",
      "integration_type": "modifier",
      "is_active": true,
      "key_features": [
        "Generates audio files in common formats like MP3 or WAV.",
        "Makes content accessible to visually impaired users or those who prefer audio over text",
        "Enables users to listen to messages while performing other tasks"
      ],
      "settings": [
        {
          "label": "Gender",
          "type": "radio",
          "required": true,
          "default": "Female",
          "options": ["Male", "Female"]
        },
        {
          "label": "Do you want to continue",
          "type": "checkbox",
          "required": true,
          "default": "Yes"
        },
        {
          "label": "Sensitivity Level",
          "type": "dropdown",
          "required": true,
          "default": "Low",
          "options": ["High", "Low"]
        }
      ],
      "target_url": "URL for integration or service"
    }
  };
      
      module.exports = integrationSpec;