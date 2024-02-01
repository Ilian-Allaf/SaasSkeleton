'use client'

import React, { useState } from 'react';
import "../globals.css";
import InputField from '@/components/InputField';
import InputError from '@/components/InputError';
import SendEmailSuccess from '@/components/SendEmailSuccess';
import { useTranslation } from '@/i18n/client'
import { ForgotPassword } from '@/actions/userAcitons/forgotPassword';


function ResetPassword() {
  const { t } = useTranslation('forgot-password')
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(""); 

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value.slice(0, 100);
    setEmail(newEmail);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await ForgotPassword(email);
    if (!res?.error) {
      setStatus("200");
    }
    else {
      setError(res.error);
    }
  };

  return (
    <>
    {status === "200" ?
      <SendEmailSuccess
        title={t("check-email")}
        subtitle={`${t("sent-email-message-1")} ${email} ${t("sent-email-message-2")}`}
        resendSubtitle={`${t("resent-email-message-1")} ${email} ${t("resent-email-message-2")}`}
        handleResend={(e: React.FormEvent) => handleSubmit(e)}
      />
    :
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">{t("reset-password")}</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <InputField
                label={t("email")}
                value={email}
                onChange={handleEmailChange}
                error={error ? true : false}
                maxLength={100}
              />
              {error && (<InputError error={error} />)}
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t("continue")}
              </button>
            </div>
            <div className="mt-2 text-center">
              <p>
                <a href="/login" className="text-indigo-600 hover:underline">
                {t("back-to-login")}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    }
  </>
  );
}

export default function Skeleton() {
  return <ResetPassword />;
}
