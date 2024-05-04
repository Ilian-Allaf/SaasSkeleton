import React, { ReactNode } from 'react';

interface ButtonProps {
  label: ReactNode;
  onClick?: (e?: React.FormEvent) => void;
  width?: string;
  center?: boolean;
  other?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, width = "w-full", center, other }) => {
  const buttonClass = `group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ${other} focus:ring-indigo-500 ${width} ${center ? 'mx-auto' : ''}`;

  return (
    <div className="mt-4">
      <button onClick={onClick} className={buttonClass}>
        {label}
      </button>
    </div>
  );
};

export default Button;
