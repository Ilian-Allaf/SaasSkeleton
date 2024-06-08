import { Label } from '@/components/ui/label';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
      <div className="grid w-full items-center gap-1.5">
        {label && <Label>{label}</Label>}
        <div className="relative">
          <input
            type={
              type === 'password' && !isPasswordVisible ? 'password' : 'text'
            }
            className={cn(
              `flex h-10 w-full rounded-md border border-${
                error ? 'destructive' : 'input'
              } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
              className
            )}
            ref={ref}
            {...props}
          />
          {type === 'password' && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {isPasswordVisible ? (
                <EyeOffIcon
                  className="h-5 w-01 text-gray-500 dark:text-gray-300 self-center"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              ) : (
                <EyeIcon
                  className="h-5 w-5 text-gray-500 dark:text-gray-300 self-center"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
