'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '@/components/InputField';
import ProgressBar from '@/components/ProgressBar';
import "../globals.css";
import { isPasswordValid, calculatePasswordProgress } from '@/utils/passwordCheck';
import Button from '@/components/Button';
import InputError from '@/components/InputError';
import SendEmailSuccess from '@/components/SendEmailSuccess';
import { signIn } from 'next-auth/react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState({ message: '', field: '' });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value.slice(0, 50);
    const isValidUsername = /^[a-zA-Z0-9]*$/.test(newUsername);
    if (isValidUsername) {
      setUsername(newUsername);
    }
    if (error.field === 'username') {
      setError({ message: '', field: '' });
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value.slice(0, 100);
    const isValidEmail = /^[^+]*$/.test(newEmail);
    if (isValidEmail) {
      setEmail(newEmail);
      if (error.field === 'email') {
        setError({ message: '', field: '' });
      }
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value.slice(0, 50);
    setPassword(newPassword);
    setPasswordError(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        signIn('credentials', {
          redirect: false,
          email,
          password,
          callbackUrl: '/',
        });
        router.push("/verify-email")
      }
      else{
        const data = await response.json();
        data.field === "password" ? setPasswordError(true) : setError(data);
      }
    } catch (error) {
      console.error('An error occurred when signed up', error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            {error.message && (
              <InputError error={error.message}/>
            )}
            <InputField
              label="Email address"
              value={email}
              onChange={handleEmailChange}
              error={error.field === 'email'}
              maxLength={100}
            />
            <InputField
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              error={error.field === 'username'}
              maxLength={50}
            />
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
            <Button label="Continue" onClick={(e: React.FormEvent) => {handleSubmit(e)}}/>
            <div className="mt-2 text-center">
              <p>
                Already have an account?{' '}
                <a href="/login" className="text-indigo-600 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function Skeleton() {
  return <SignUp />;
}
