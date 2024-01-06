import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="mt-2">
      <div className="relative pt-1">
        <div className="flex h-2 mb-4 overflow-hidden text-xs rounded">
          <div
            style={{ width: `${progress}%` }}
            className={`flex flex-col justify-center ${
              progress <= 50 ? 'bg-red-500' : progress <= 99 ? 'bg-orange-500' : 'bg-green-500'
            } shadow-none whitespace-nowrap`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
