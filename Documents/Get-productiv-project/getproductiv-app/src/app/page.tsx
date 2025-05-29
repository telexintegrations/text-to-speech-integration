"use client";
import { useState } from 'react';
import HelpModal from '../frontend/components/HelpModal';
import SettingsModal from '../frontend/components/SettingsModal';

export default function Home() {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <div className="max-w-[600px] mx-auto w-full">
      <header className="text-center mb-4">
        <div className="">Get Productive</div>
        <div className="header-controls">
          <button
            className="p-2 text-xl hover:text-[#e2e8f0]"
            title="Help"
            aria-label="Help"
            onClick={() => setShowHelpModal(true)}
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
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="p-2 text-xl hover:text-[#e2e8f0]"
            title="Settings"
            aria-label="Settings"
            onClick={() => setShowSettingsModal(true)}
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
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>

      {showHelpModal && (
        <HelpModal onClose={() => setShowHelpModal(false)} />
      )}

      {showSettingsModal && (
        <SettingsModal onClose={() => setShowSettingsModal(false)} />
      )}

      <div className=" bg-[#ffffff08] backdrop-blur-sm text-center p-4 border border-[#ffffff0d] rounded-xl mb-8">
        <div className="text-6xl font-light text-[#64ffda]" aria-live="polite">25:00</div>
        <div className="mb-6">Time to focus</div>
        <div className="flex gap-4 justify-center mb-8">
          <button className="py-3 px-5 rounded-lg font-medium bg-[#ffffff0d] text-[#e2e8f0] relative overflow-hidden" id="resetBtn">Reset</button>
          <button className="py-3 px-5 rounded-lg font-medium bg-[#64ffda] text-[#171c2f] relative overflow-hidden" id="startBtn">Start Focus</button>
          <button className="py-3 px-5 rounded-lg font-medium bg-[#ffffff0d] text-[#e2e8f0] relative overflow-hidden" id="breakBtn">Take Break</button>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <div className=" flex-1/2 p-4 rounded-lg text-center border border-[#ffffff0d] transition-all duration-300 ease-in bg-[#ffffff08]">
          <div className="text-xl font-semibold text-[#64ffda] mb-2">100</div>
          <div className="text-sm">Focus Score</div>
        </div>
        <div className="flex-1/2 p-4 rounded-lg text-center border border-[#ffffff0d] transition-all duration-300 ease-in bg-[#ffffff08]">
          <div className="text-xl font-semibold text-[#64ffda] mb-2">0</div>
          <div className="text-sm">Tasks Completed</div>
        </div>
      </div>

      <div className="">
        <div className="bg-[#ffffff08] rounded-lg p-6 border border-[#ffffff0d]">
          <form id="taskForm" className='flex gap-4'>
            <div className="flex-1/2">
              <label htmlFor="taskName" className="sr-only">Task Name</label>
              <input
                type="text"
                id="taskName"
                placeholder="What are you working on?"
                required
                className='w-full p-3 border border-[#ffffff1a] text-[#64ffda] bg-[#ffffff0d] outline-0'
              />
            </div>
            <button type="submit" className="py-3 px-5 rounded-lg font-medium bg-[#64ffda] text-[#171c2f] relative overflow-hidden ">Add Task</button>
          </form>
        </div>

        <div className="rounded-lg p-6 mt-8 bg-[#ffffff08]">
          <div className="flex justify-center items-center mb-4">
            <h3>Current Task</h3>
            <button
              id="toggleQueue"
              className="text-[#666] text-xs"
              aria-expanded="false"
              aria-controls="taskQueue"
            >
              Show Queue
            </button>
          </div>
          <div id="currentTask" className="bg-[#ffffff08] p-2 rounded-lg border border-[#ffffff0d]">
            <p id="currentTaskText">No task</p>
          </div>
          <div id="taskQueue" className="mt-4 hidden" aria-hidden="true">
            <h4>Upcoming Tasks</h4>
            <ul id="taskList" className="mt-4"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}