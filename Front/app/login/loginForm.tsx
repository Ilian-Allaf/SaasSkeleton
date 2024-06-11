'use client';

import InputError from '@/components/InputError';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../globals.css';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {
  texts: any;
}

export function LoginForm({ className, texts, ...props }: LoginFormProps) {
  const [isGoogleButtonLoading, setIsGoogleButtonLoading] = useState(false);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsGoogleButtonLoading(true);
    const res = await signIn('google');
    setTimeout(() => {
      setIsGoogleButtonLoading(false);
    }, 3000);
  };

  const signInMutationFn = async ({ email, password }) => {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: '/',
    });
    if (result?.error) {
      throw new Error(result.error);
    }
    return result;
  };

  const { mutate: server_signin, isPending: isSigningIn } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      await signInMutationFn({
        email,
        password,
      });
    },
    onSuccess: () => {
      router.push('/dashboard');
    },
    onError: () => {
      form.setError('root', {
        type: 'custom',
        message: 'Wrong email or password',
      });
    },
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  React.useEffect(() => {
    form.setError('root', {});
  }, [form.watch('email'), form.watch('password')]);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) =>
            server_signin({ email: values.email, password: values.password })
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
                    error={!!form.formState.errors.root?.message}
                    label="Email"
                    id="email"
                    placeholder=""
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isGoogleButtonLoading || isSigningIn}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    error={!!form.formState.errors.root?.message}
                    label="Password"
                    id="password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={isGoogleButtonLoading || isSigningIn}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.root?.message && (
            <InputError error={form.formState.errors.root?.message} />
          )}
          <Link
            key="forgot-password"
            href="/forgot-password"
            className="hover:underline text-sm"
          >
            {texts.forgotPassword}
          </Link>
          <Button
            type="submit"
            className="w-full"
            disabled={isGoogleButtonLoading || isSigningIn}
            loading={isSigningIn}
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
        disabled={isSigningIn}
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
