'use client';

import { CancelSubscription } from '@/actions/subscriptionActions/cancelSubscription';
import { RemovePendingCancellation } from '@/actions/subscriptionActions/removePendingCancellation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from '@/i18n/client';
import { useSubscriptionStore } from '@/store/store';
import useServerAction from '@/utils/customHook/useServerAction';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export default function CancelSubscriptionButton() {
  const { t } = useTranslation('settings');
  const { willSubscriptionEnd, setWillSubscriptionEnd } =
    useSubscriptionStore();
  const [isCancelSubscriptionDialogOpen, setIsCancelSubscriptionDialogOpen] =
    useState(false);

  const {
    callableName: server_cancelSubscription,
    isPending: isCancellingSubscription,
  } = useServerAction({
    action: async ({ feedback }: { feedback?: string }) =>
      CancelSubscription({ feedback }),
    onSuccess: (data) => {
      setIsCancelSubscriptionDialogOpen(false);
      setWillSubscriptionEnd(true);
      toast.success(t('billing.successfully-canceled'));
    },
    onError: () => {
      toast.error(t('billing.error-cancelling'));
    },
  });

  const {
    callableName: server_removePendingCancellation,
    isPending: isRemovingPendingCancellation,
  } = useServerAction({
    action: async () => {
      await RemovePendingCancellation();
    },
    onSuccess: () => {
      setIsCancelSubscriptionDialogOpen(false);
      setWillSubscriptionEnd(false);
      toast.success(t('billing.successfully-reactivated'));
    },
    onError: () => {
      toast.error(t('billing.error-reactivating'));
    },
  });

  const formSchema = z.object({
    feedback: z.string().min(0).max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: '',
    },
    mode: 'onChange',
  });

  return (
    <>
      <Dialog
        open={isCancelSubscriptionDialogOpen}
        onOpenChange={() => {
          setIsCancelSubscriptionDialogOpen(false);
        }}
      >
        <DialogContent className="max-h-screen sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t('billing.cancel-subscription')}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((values) =>
                server_cancelSubscription({ feedback: values.feedback })
              )}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormDescription>{t('billing.why-cancel')}</FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" loading={isCancellingSubscription}>
                  {t('billing.confirm')}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
        {!willSubscriptionEnd ? (
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              setIsCancelSubscriptionDialogOpen(true);
            }}
          >
            {t('billing.cancel-subscription')}
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="w-full"
            loading={isRemovingPendingCancellation}
            onClick={() => {
              server_removePendingCancellation();
            }}
          >
            {t('billing.reactivate-subscription')}
          </Button>
        )}
      </Dialog>
    </>
  );
}
