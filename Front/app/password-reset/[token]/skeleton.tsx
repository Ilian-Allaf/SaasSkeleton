"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../../globals.css";
import InputField from '@/components/InputField';
import ProgressBar from '@/components/ProgressBar';
import { calculatePasswordProgress, isPasswordValid } from '@/utils/passwordCheck';
import InputError from '@/components/InputError';


function ResetPassword({token}: {token:string}) {
  const router = useRouter();
  const [error, setError] = useState('');
  //Password
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  //Confirm Password
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  
  //Password
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value.slice(0, 50);
    setPassword(newPassword);
    setPasswordError(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //Confirm Password
  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value.slice(0, 50);
    setConfirmPassword(newPassword);
    setConfirmPasswordError(false);
    setError('')
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setConfirmPasswordError(true)
      setError('Passwords do not match');
      return;
    }
    
    if (!isPasswordValid(password)) {
      setPasswordError(true);
      return;
    }

    try {
      const response = await fetch('/api/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token, password: password }),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('An error occurred reset password', error);
    }
  };  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Choose a new password</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputField
              isPassword={true}
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              error={passwordError}
              passwordVisible={showPassword}
              onTogglePasswordVisibility={handleTogglePasswordVisibility}
          />
          {password && <ProgressBar progress={calculatePasswordProgress(password)} />}
          <div>
            <InputField
                isPassword={true}
                label="Confirm password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={confirmPasswordError}
                passwordVisible={showConfirmPassword}
                onTogglePasswordVisibility={handleToggleConfirmPasswordVisibility}
                disableText={true}
            />
            {error && (<InputError error={error}/>)}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
          </div>
          <div className="mt-2 text-center">  
            <p>
              <a href="/login" className="text-indigo-600 hover:underline">
              Go back to Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

// Export the wrapped component
export default function Skeleton({token}: {token: string}) {
    return <ResetPassword token={token}/>;
}
