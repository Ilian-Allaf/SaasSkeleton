'use client';

import { RegisterUser } from '@/actions/userActions/registerUser';
import InputError from '@/components/InputError';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import useServerAction from '@/utils/customHook/useServerAction';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../globals.css';

interface SignupFormProps extends React.HTMLAttributes<HTMLDivElement> {
  texts: any;
}

export function SignupForm({ className, texts, ...props }: SignupFormProps) {
  const [isGoogleButtonLoading, setIsGoogleButtonLoading] = useState(false);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsGoogleButtonLoading(true);
    const res = await signIn('google');
    setTimeout(() => {
      setIsGoogleButtonLoading(false);
    }, 3000);
  };

  const handleSubmit = async ({
    email,
    password,
    confirmPassword,
  }: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    if (password !== confirmPassword) {
      form.setError('confirmPassword', {
        type: 'custom',
        message: texts.passwordsDontMatch,
      });
      return;
    }
    return server_registerUser({
      email: email,
      password: password,
    });
  };

  const { callableName: server_registerUser, isPending: isRegisteringUser } =
    useServerAction({
      action: async ({
        email,
        password,
      }: {
        email: string;
        password: string;
      }): Promise<{ email: string; password: string }> => {
        await RegisterUser({
          email,
          password,
        });
        return { email, password };
      },
      onSuccess: ({ email, password }: { email: string; password: string }) => {
        console.log('here');
        signIn('credentials', {
          redirect: false,
          email,
          password,
          callbackUrl: '/',
        });
        router.push('/verify-email');
      },
      onError: (error: any) => {
        form.setError(error.field, {
          type: 'custom',
          message: error.message,
        });
      },
    });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  React.useEffect(() => {
    form.setError('root', {});
    form.setError('email', {});
    form.setError('password', {});
    form.setError('confirmPassword', {});
  }, [
    form.watch('email'),
    form.watch('password'),
    form.watch('confirmPassword'),
  ]);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => handleSubmit(data))}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    required={true}
                    {...form.register('email', { required: true })}
                    error={!!form.formState.errors.email?.message}
                    label={texts.email}
                    id="email"
                    placeholder=""
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isGoogleButtonLoading || isRegisteringUser}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.email?.message && (
            <InputError error={form.formState.errors.email?.message} />
          )}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    required={true}
                    error={
                      !!form.formState.errors.password?.message ||
                      !!form.formState.errors.confirmPassword?.message
                    }
                    label={texts.password}
                    id="password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={isGoogleButtonLoading || isRegisteringUser}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.password?.message && (
            <InputError error={form.formState.errors.password?.message} />
          )}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    required={true}
                    error={!!form.formState.errors.confirmPassword?.message}
                    label={texts.confirmPassword}
                    id="confirmPassword"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={isGoogleButtonLoading || isRegisteringUser}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.confirmPassword?.message && (
            <InputError
              error={form.formState.errors.confirmPassword?.message}
            />
          )}
          <Label className="text-xs text-primary-foreground">
            {texts.passwordRequirements}
          </Label>
          <Button
            type="submit"
            className="w-full"
            disabled={isGoogleButtonLoading || isRegisteringUser}
            loading={isRegisteringUser}
          >
            {texts.continue}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {texts.orContinueWith}
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isRegisteringUser}
        onClick={handleGoogleSignIn}
      >
        {isGoogleButtonLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <img
            className="mr-2 h-4 w-4"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
        )}{' '}
        Google
      </Button>
    </div>
  );
}
