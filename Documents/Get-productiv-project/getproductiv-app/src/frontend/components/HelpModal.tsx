'use client';

interface HelpModalProps {
  onClose: () => void;
}

export default function HelpModal({ onClose }: HelpModalProps) {
  return (
    <div
      className="fixed inset-0 grid place-items-center z-50"
      role="dialog"
      aria-labelledby="helpModalTitle"
      aria-hidden="false"
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative p-8 rounded-lg w-[90%] max-w-[500px] mx-auto my-8 border border-[#ffffff0d] bg-[#171c2f]">
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-3xl font-medium bg-clip-text bg-[#94a3b8]"
            id="helpModalTitle"
          >
            How to Use Focus
          </h2>
          <button
            className="p-2 text-xl hover:text-[#e2e8f0]"
            onClick={onClose}
            aria-label="Close Help"
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
        <div className="text-sm leading-[1.6]">
          <h3 className="text-xl my-4">Getting Started</h3>
          <ol className="pl-6">
            <li className="mb-3  text-[#94a3b8]">
              Add a task using the task input form
            </li>
            <li className="mb-3  text-[#94a3b8]">
              Click &quot;Start Focus&quot; to begin your focus session
            </li>
            <li className="mb-3  text-[#94a3b8]">
              Work on one task at a time - other tasks stay hidden in the queue
            </li>
            <li className="mb-3  text-[#94a3b8]">
              Complete tasks to earn points and build your streak
            </li>
          </ol>
          <h3>Scoring System</h3>
          <ul>
            <li className="mb-3  text-[#94a3b8]">Complete tasks: +20 points</li>
            <li className="mb-3  text-[#94a3b8]">
              Flow state bonus: +30 points (complete task without interruptions)
            </li>
            <li className="mb-3 text-[#94a3b8]">Pause timer: -15 points</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
