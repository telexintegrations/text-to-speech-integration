'use client';
import { useState } from 'react';

interface SettingsModalProps {
    onClose: () => void;
}

export default function SettingsModal({ onClose }: SettingsModalProps) {
    const [focusDuration, setFocusDuration] = useState<number>(25);
    const [breakDuration, setBreakDuration] = useState<number>(5);

    const handleSaveSettings = (): void => {
        onClose();
    };


    return (
        <div
            className="fixed inset-0 grid place-items-center z-50"
            role="dialog"
            aria-labelledby="settingsModalTitle"
            aria-hidden="false"
        >
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div className="relative p-8 rounded-lg w-[90%] max-w-[500px] mx-auto my-8 border border-[#ffffff0d] bg-[#171c2f]">
                <div className="flex justify-between items-center mb-6">
                    <h2 id="settingsModalTitle">Settings</h2>
                    <button
                        className="p-2 text-xl hover:text-[#e2e8f0]"
                        onClick={onClose}
                        aria-label="Close Settings"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="20"
                            height="20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mb-6">
                    <label htmlFor="focusDuration" className="block mb-2 text-[#94a3b8]">Focus Duration (minutes)</label>
                    <input
                        type="number"
                        id="focusDuration"
                        min="1"
                        value={focusDuration}
                        onChange={(e) => setFocusDuration(parseInt(e.target.value))}
                        className='w-full bg-[#ffffff0d] border border-[#ffffff1a] p-3 rounded-lg text-[#64ffda]'
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="breakDuration" className="block mb-2 text-[#94a3b8]">Break Duration (minutes)</label>
                    <input
                        type="number"
                        id="breakDuration"
                        min="1"
                        max="30"
                        value={breakDuration}
                        onChange={(e) => setBreakDuration(parseInt(e.target.value))}
                        className='w-full bg-[#ffffff0d] border border-[#ffffff1a] p-3 rounded-lg text-[#64ffda]'
                    />
                </div>
                <button
                    className="py-3 px-5 rounded-lg font-medium bg-[#64ffda] text-[#171c2f] relative overflow-hidden"
                    onClick={handleSaveSettings}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}