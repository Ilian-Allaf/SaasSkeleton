import React from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { isPasswordValid } from '@/utils/passwordCheck';

interface InputFieldProps {
  isPassword?: boolean;
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  maxLength?: number;
  height?: number;
  passwordVisible?: boolean;
  disableText?: boolean;
  onTogglePasswordVisibility?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  isPassword = false,
  label,
  value,
  onChange,
  error = false,
  maxLength,
  height = 2,
  passwordVisible = false,
  disableText = false,
  onTogglePasswordVisibility,
}) => {
  const showErrorMessage = isPassword && !isPasswordValid(value);

  return (
    <div className={`mt-4 ${error ? 'border-red-500' : ''}`}>
      {label && (
      <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      )}
      <div className="relative">
        <input
          type={isPassword  && !passwordVisible ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          required
          maxLength={maxLength}
          className={`mt-1 p-${height != null ? height : 2} w-full border focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md ${error ? 'border-red-500' : ''}`}
        />
        {isPassword && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={onTogglePasswordVisibility}
          >
            {passwordVisible ? (
              <EyeOffIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </div>
        )}
      </div>
      {showErrorMessage && !disableText && (
        <p className={`text-xs ${error ? 'text-red-500' : 'text-black'}`}>
          Le mot de passe doit avoir au moins 8 caractères, 1 chiffre, 1 lettre majuscule et 1 caractère spécial.
        </p>
      )}
    </div>
  );
};

export default InputField;
