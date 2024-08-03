'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from '@/i18n/client';
import { cn } from '@/lib/utils';
import { CheckIcon } from '@heroicons/react/outline';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Plans } from './page';

type PricingSwitchProps = {
  onSwitch: (value: string) => void;
  t: any;
};

type PricingCardProps = {
  isYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  popular?: boolean;
  yearlyStripeId: string;
  monthlyStripeId: string;
  exclusive?: boolean;
  isCurrentPlan: boolean;
  t: any;
};

const PricingHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
);

const PricingSwitch = ({ onSwitch, t }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2">
      <TabsTrigger value="0" className="text-base">
        {t('monthly')}
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        {t('yearly')}
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  yearlyStripeId,
  monthlyStripeId,
  isCurrentPlan,
  t,
}: PricingCardProps) => {
  const [loading, setLoading] = useState(false);
  const subscribe = async (price_id: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        '/api/subscription/create-checkout-session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ price_id: price_id }),
        }
      );
      if (!response.ok) {
        window.location.href = (await response.json()).url;
      }
    } catch (error) {
      console.error('An error occurred', error);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    }
  };
  return (
    <Card
      className={cn(
        `w-72 flex flex-col justify-between py-1 ${
          popular ? 'border-rose-400' : 'border-zinc-700'
        } mx-auto sm:mx-0`
      )}
    >
      <div>
        <CardHeader className="pb-8 pt-4">
          {isYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
                {title}
              </CardTitle>
              <div
                className={cn(
                  'px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white',
                  {
                    'bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ':
                      popular,
                  }
                )}
              >
                Save ${monthlyPrice * 12 - yearlyPrice}
              </div>
            </div>
          ) : (
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
              {title}
            </CardTitle>
          )}
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">
              {yearlyPrice && isYearly
                ? '$' + yearlyPrice
                : monthlyPrice
                ? '$' + monthlyPrice
                : 'Custom'}
            </h3>
            <span className="flex flex-col justify-end text-sm mb-1">
              {yearlyPrice && isYearly
                ? '/' + t('year')
                : monthlyPrice
                ? '/' + t('month')
                : null}
            </span>
          </div>
          <CardDescription className="pt-1.5 h-12">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature: string) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Button
          className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => subscribe(isYearly ? yearlyStripeId : monthlyStripeId)}
          loading={loading}
          disabled={isCurrentPlan}
        >
          <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
          {isCurrentPlan ? <CheckIcon className="h-6 w-6" /> : actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);

export default function Skeleton({
  subscribtionPlans,
}: {
  subscribtionPlans: Plans;
}) {
  const { t } = useTranslation('pricing');
  const [isYearly, setIsYearly] = useState(false);
  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1);
  return (
    <div className="py-8">
      <PricingHeader title={t('title')} subtitle={t('subtitle')} />
      <PricingSwitch onSwitch={togglePricingPeriod} t={t} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {subscribtionPlans.map((plan) => {
          return (
            <PricingCard
              key={plan.title}
              {...plan}
              yearlyStripeId={plan.yearly_stripe_id}
              monthlyStripeId={plan.monthly_stripe_id}
              isYearly={isYearly}
              isCurrentPlan={plan.isCurrentPlan}
              t={t}
            />
          );
        })}
      </section>
    </div>
  );
}
