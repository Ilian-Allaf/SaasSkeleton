// components/ProfileForm.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/i18n/client'
import { PencilIcon } from '@heroicons/react/outline';
import { Button } from '@/components/ui/button';
import { CancelSubscription } from '@/actions/subscriptionActions/cancelSubscription';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import { useMutation } from '@tanstack/react-query';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { RemovePendingCancellation } from '@/actions/subscriptionActions/removePendingCancellation';

function Billing({ subscriptionPlan, price, cardLast4digits, cardBrand, nextBillingDate, canceledAtPeriodEnd }: { subscriptionPlan: string, price: string, cardLast4digits: string, cardBrand: string, nextBillingDate: string, canceledAtPeriodEnd: boolean }) {
  const [isCancelSubscriptionModalOpen, setIsCancelSubscriptionModalOpen] = useState(false)
  const [willSubscriptionEnd, setWillSubscriptionEnd] = useState(canceledAtPeriodEnd)
  const { t } = useTranslation('settings')

  const {
    mutate: server_cancelSubscription,
    isPending: isCancellingSubscription,
  } = useMutation({
    mutationFn: async ({ feedback }: { feedback?: string, }) => {await CancelSubscription({ feedback })},
    onSuccess: () => {
      setIsCancelSubscriptionModalOpen(false);
      setWillSubscriptionEnd(true)
      toast.success(t('billing.successfully-canceled'));
    },
    onError: () => {
      toast.error(t('billing.error-cancelling'));
    }
  });

  const {
    mutate: server_removePendingCancellation,
    isPending: isRemovingPendingCancellation,
  } = useMutation({
    mutationFn: async () => {await RemovePendingCancellation()},
    onSuccess: () => {
      setIsCancelSubscriptionModalOpen(false);
      setWillSubscriptionEnd(false)
      toast.success(t('billing.successfully-reactivated'));
    },
    onError: () => {
      toast.error(t('billing.error-reactivating'));
    }
  });

  const formSchema = z.object({
    feedback: z.string().min(0).max(500),

  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: "",
    },
    mode: "onChange"
  })


  return (
    <>
      <Dialog open={isCancelSubscriptionModalOpen} onOpenChange={() => { setIsCancelSubscriptionModalOpen(false) }}>
        <DialogContent className="max-h-screen sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t("billing.cancel-subscription")}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit((values) => server_cancelSubscription({ feedback: values.feedback }))} className="space-y-8">
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormDescription>{t('billing.why-cancel')}</FormDescription>
                    <FormControl>
                      <Textarea placeholder="Type your message here." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" loading={isCancellingSubscription}>{t("billing.confirm")}</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <div className='space-y-10'>
        {willSubscriptionEnd && 
            <Alert variant='destructive' >
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Warning!</AlertTitle>
              <AlertDescription>
                {t('billing.warning-subscription-end')} <b>{nextBillingDate}</b> {t("billing.warning-suggestion-subscription-end")}
              </AlertDescription>
            </Alert>
          }
        <div className='space-y-20'>
          <div><SubscriptionFields subscriptionPlan={subscriptionPlan} price={price}/></div>
          <div><PaymentMethodeFields willSubscriptionEnd={willSubscriptionEnd} nextBillingDate={nextBillingDate} cardLast4digits={cardLast4digits} cardBrand={cardBrand}/></div>
          { 
            !willSubscriptionEnd
            ? <Button variant='secondary' className='w-full' onClick={() => { setIsCancelSubscriptionModalOpen(true)}}>{t('billing.cancel-subscription')}</Button>
            :<Button variant='secondary' className='w-full' loading={isRemovingPendingCancellation} onClick={() => { server_removePendingCancellation() }}>{t('billing.reactivate-subscription')}</Button>
          }
        </div>
      </div>
    </>
  );
}


function PaymentMethodeFields({willSubscriptionEnd, nextBillingDate, cardLast4digits, cardBrand}: {willSubscriptionEnd: boolean ,nextBillingDate: string, cardLast4digits: string, cardBrand: string}) {
  const { t } = useTranslation('settings')
  
  useEffect(() => {
    setProfileItems(profileItems.map(item => 
      item.label === t('billing.next-billing') 
        ? { ...item, value: willSubscriptionEnd ? t('billing.no-billing-planned'): nextBillingDate } 
        : item
    ));
  }, [willSubscriptionEnd]);

  const [profileItems, setProfileItems] = useState([
    { label: cardBrand, value: `**** **** **** ${cardLast4digits}`, updateSetting: () => {} },
    {label: t('billing.next-billing'), value: willSubscriptionEnd ? t('billing.no-billing-planned'): nextBillingDate, updateSetting: () => {}},
  ]);

  return (
    <>
      {/* PaymentMethode Modal*/}
      
      <h3 className="text-lg font-medium">{t("billing.payment-title")}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("billing.payment-subtitle")}</p>
      <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5 " />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>
            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              { item.label !== t('billing.next-billing') 
              ? <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
              : null
              }
            </span>
            {index !== profileItems.length - 1 && (
              <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5 " />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function SubscriptionFields({ subscriptionPlan, price}: { subscriptionPlan: string, price: string }) {
  const router = useRouter()
  const { t } = useTranslation('settings')
  const [subscriptionItems, setSubscriptionItems] = useState([
    { label: subscriptionPlan, value: price, updateSetting:  () => { router.push('/pricing') } },
  ]);
  const [isCancelSubscriptionModalOpen, setIsCancelSubscriptionModalOpen] = useState(false)


  return (
    <>
      {/* Subscription Modal*/}
      <h3 className="text-lg font-medium">{t("billing.subscription-title")}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("billing.subscription-subtitle")}</p>
      <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5 " />
      <div className="grid grid-rows gap-6 mt-6">
        {subscriptionItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>
            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== subscriptionItems.length - 1 && (
              <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5 " />
            )}
          </div>
        ))}
      </div>
    </>
  );
}




export default Billing;
