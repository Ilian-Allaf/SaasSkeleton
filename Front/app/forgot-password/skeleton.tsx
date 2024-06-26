'use client';

import { ForgotPassword } from '@/actions/userActions/forgotPassword';
import InputError from '@/components/InputError';
import SendEmailSuccess from '@/components/SendEmailSuccess';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/i18n/client';
import useServerAction from '@/utils/customHook/useServerAction';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import '../globals.css';

export default function Skeleton({ texts }: { texts: any }) {
  const { t } = useTranslation('forgot-password');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const { callableName: server_forgotPassword, isPending } = useServerAction({
    action: ({ email }: { email: string }) => ForgotPassword({ email: email }),
    onSuccess: ({ email }: { email: string }) => {
      setEmail(email);
      setStatus('200');
    },
    onError: (error: any) => {
      if (error.field === 'email') {
        form.setError('email', {
          type: 'custom',
          message: error.message,
        });
      } else {
        toast.error(texts.errorResendingEmail);
      }
    },
  });

  const form = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const emailWatch = form.watch('email');

  React.useEffect(() => {
    form.setError('email', {});
  }, [emailWatch]);

  return (
    <>
      {status === '200' ? (
        <SendEmailSuccess
          title={texts.checkEmail}
          subtitle={`${texts.sentEmailMessage1} ${email} ${texts.sentEmailMessage2}`}
          resendSubtitle={`${texts.resentEmailMessage1} ${email} ${texts.resentEmailMessage2}`}
          resendButtonText={texts.resendEmail}
          isSending={isPending}
          handleResend={async () => server_forgotPassword({ email: email })}
          redirectionText={texts.backToDashboard}
        />
      ) : (
        <div className="container relative flex flex-col items-center justify-center h-screen lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  {texts.resetPassword}
                </h1>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((values) =>
                    server_forgotPassword({ email: values.email })
                  )}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            required={true}
                            error={!!form.formState.errors.email?.message}
                            label={texts.email}
                            id="email"
                            placeholder=""
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {form.formState.errors.email?.message && (
                    <InputError error={form.formState.errors.email?.message} />
                  )}
                  <Button type="submit" className="w-full" loading={isPending}>
                    {texts.continue}
                  </Button>
                </form>
              </Form>
              <div className="mt-2 text-center">
                <p>
                  <a
                    onClick={() => router.push('/login')}
                    className="hover:underline cursor-pointer"
                  >
                    {texts.backToLogin}
                  </a>
                </p>
              </div>
              {/* <form
                className="mt-8 space-y-6"
                onSubmit={() => server_forgotPassword({ email: email })}
              >
                <div>
                  <Input
                    onChange={handleEmailChange}
                    label={texts.email}
                    error={!!error}
                    maxLength={100}
                  />
                  {error && <InputError error={error} />}
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {texts.continue}
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <p>
                    <a href="/login" className="text-indigo-600 hover:underline">
                      {texts.backToLogin}
                    </a>
                  </p>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
