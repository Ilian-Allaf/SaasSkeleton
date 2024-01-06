"use client"

import "../globals.css";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { credentialsSignInAction, googleSignInAction } from '../../action/signinAction';
import BellowInputError from "@/components/BellowInputError";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState('');
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    googleSignInAction()
  };
  
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value.slice(0, 100);
    setEmail(newEmail);
    setError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setError('');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await credentialsSignInAction(email, password)
      if (result?.error) {
        setError('Wrong email or password');
      } else {
        router.push('/dashboard');
      }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Welcome back</h2>
            <InputField
              type="email"
              label="Email address"
              value={email}
              onChange={handleEmailChange}
              error={error ? true : false}
              maxLength={100}
            />
            <InputField
              type="password"
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              error={error ? true : false}
              passwordVisible={showPassword}
              onTogglePasswordVisibility={handleTogglePasswordVisibility}
              disableText={true}
              />
            {error && (<BellowInputError error={error}/>)}
            <div className="mt-2">
              <p>
                <a href="/forgot-password" className="text-indigo-600 hover:underline">
                  Forgot password?
                </a>
              </p>
            </div>
            <Button label="Continue" onClick={(e: React.FormEvent) => {handleSubmit(e)}}/>
            <div className="mt-2 text-center">
              <p>
                Don't have an account?{' '}
                <a href="/signup" className="text-indigo-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </form>
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center px-4 py-2 border border-black dark:border-gray-400 rounded-lg text-black text-sm hover:bg-gray-100 dark:hover:bg-gray-200 hover:text-black-900 dark:hover:text-black-300 hover:shadow transition duration-10"
                onClick={handleGoogleSignIn}
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span className="whitespace-nowrap">Continue with Google</span>
              </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default function Skeleton() {
  return <Login />;
}