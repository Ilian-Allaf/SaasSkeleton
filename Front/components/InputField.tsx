import { useTranslation } from '@/i18n/client';
import { isPasswordValid } from '@/utils/passwordCheck';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import React from 'react';

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
  const { t } = useTranslation('signup');
  const showErrorMessage = isPassword && !isPasswordValid({ password: value });

  return (
    <div className={`mt-4 ${error ? 'border-red-500' : ''}`}>
      {label && (
        <label
          htmlFor={label.toLowerCase()}
          className="block text-sm font-medium"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={isPassword && !passwordVisible ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          required
          maxLength={maxLength}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-${
            height != null ? height : 2
          } text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? 'border-red-500' : ''
          }}`}
        />
        {isPassword && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {passwordVisible ? (
              <EyeOffIcon
                className="h-5 w-01 text-gray-500 dark:text-gray-300 self-center"
                onClick={onTogglePasswordVisibility}
              />
            ) : (
              <EyeIcon
                className="h-5 w-5 text-gray-500 dark:text-gray-300 self-center"
                onClick={onTogglePasswordVisibility}
              />
            )}
          </div>
        )}
      </div>
      {showErrorMessage && !disableText && (
        <p
          className={`text-xs ${
            error ? 'text-red-500' : ''
          } dark:text-gray-300 mt-2`}
        >
          {t('password-requirements')}
        </p>
      )}
    </div>
  );
};

export default InputField;
