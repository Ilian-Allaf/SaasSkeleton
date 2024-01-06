import React from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { isPasswordValid } from '@/utils/passwordCheck';

interface InputFieldProps {
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  maxLength?: number;
  passwordVisible?: boolean;
  disableText?: boolean;
  onTogglePasswordVisibility?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  value,
  onChange,
  error = false,
  maxLength,
  passwordVisible = false,
  disableText = false,
  onTogglePasswordVisibility,
}) => {
  const showErrorMessage = type === 'password' && !isPasswordValid(value);

  return (
    <div className={`mt-4 ${error ? 'border-red-500' : ''}`}>
      <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type={type === 'password' && !passwordVisible ? 'password' : 'text'}
          id={label.toLowerCase()}
          name={label.toLowerCase()}
          value={value}
          onChange={onChange}
          required
          maxLength={maxLength}
          className={`mt-1 p-2 w-full border rounded-md ${error ? 'border-red-500' : ''}`}
        />
        {type === 'password' && (
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
