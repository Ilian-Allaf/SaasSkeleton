'use client';
import InputError from '@/components/InputError';
import { useRouter } from 'next/navigation';
import '../../globals.css';

import { ResetPassword } from '@/actions/resetPassword';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import useServerAction from '@/utils/customHook/useServerAction';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  texts: any;
  token: string;
}

export default function Skeleton({
  className,
  texts,
  token,
  ...props
}: SkeletonProps) {
  const router = useRouter();

  const handleSubmit = async ({
    password,
    confirmPassword,
  }: {
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
    return server_resetPassword({
      password: password,
    });
  };

  const { callableName: server_resetPassword, isPending: isResetingPassword } =
    useServerAction({
      action: ({ password }: { password: string }) =>
        ResetPassword({
          token: token,
          password: password,
        }),
      onSuccess: () => {
        router.push('/login');
        toast.success(texts.passwordResetSuccess);
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
    form.setError('password', {});
    form.setError('confirmPassword', {});
  }, [form.watch('password'), form.watch('confirmPassword')]);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => handleSubmit(data))}
          className="space-y-4"
        >
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
                    disabled={isResetingPassword}
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
                    disabled={isResetingPassword}
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
          <Button type="submit" className="w-full" loading={isResetingPassword}>
            {texts.continue}
          </Button>
        </form>
      </Form>
    </div>
  );
}
