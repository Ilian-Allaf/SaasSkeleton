import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/i18n/index';
import { setupGraphQLClient } from '@/lib/gqlClient';
import {
  GetSubscriptionPlanIdByNameDocument,
  GetUserDocument,
} from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import Stripe from 'stripe';
import CancelSubscriptionButton from './cancelSubscriptionButton';
import PaymentMethodeForm from './paymentMethodeForm';
import SubscriptionEndAlert from './subscriptionEndAlert';
import SubscriptionForm from './subscriptionForm';

function capitalizeFirstLetter(string) {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function Page() {
  const session = await getServerSession(authOptions);
  const { t } = await useTranslation('settings');
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  });
  const gqlClient = await setupGraphQLClient();

  if (!session) {
    return {
      error: 'Not Authenticated',
    };
  }

  if (!session.user.subscriptionPlan) {
    return {
      error: 'Not subscribed',
    };
  }

  let subscriptionPlan: string = capitalizeFirstLetter(
    session.user.subscriptionPlan
  );
  let priceString: string = '-';
  let cardLast4digits: string = '-';
  let cardBrand: string = '-';
  let nextBillingDate: string = '-';
  let canceledAtPeriodEnd: boolean = false;

  const user = await gqlClient!.request(GetUserDocument, {
    id: session.user.id,
  });
  if (
    user?.auth_user_by_pk?.id &&
    user?.auth_user_by_pk?.subscribtion_plan &&
    user?.auth_user_by_pk?.stripe_customer_id &&
    user?.auth_user_by_pk?.stripe_subscribtion_id
  ) {
    const subscriptionPlanId = await gqlClient!.request(
      GetSubscriptionPlanIdByNameDocument,
      { name: user.auth_user_by_pk.subscribtion_plan }
    );
    const price = await stripe.prices.retrieve(
      subscriptionPlanId.subscribtion_plan[0].id
    );
    priceString = `${price.unit_amount! / 100}$/${price.recurring?.interval}`;

    const subscription = await stripe.subscriptions.retrieve(
      user.auth_user_by_pk.stripe_subscribtion_id
    );
    nextBillingDate = new Date(
      subscription.current_period_end * 1000
    ).toLocaleDateString();
    canceledAtPeriodEnd = subscription.cancel_at_period_end;

    const paymentMethods = await stripe.paymentMethods.list({
      customer: user.auth_user_by_pk.stripe_customer_id,
      type: 'card',
    });
    const card = paymentMethods.data[0].card;

    if (!card) {
      return {
        error: 'No card',
      };
    }
    cardLast4digits = card.last4;
    cardBrand = card.brand;
  } else {
    console.error('Not subscribed');
  }

  return (
    <div className="space-y-20">
      <div className="space-y-10">
        <SubscriptionEndAlert nextBillingDate={nextBillingDate} />
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">
              {t('billing.subscription-title')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('billing.subscription-subtitle')}
            </p>
          </div>
          <Separator />
          <SubscriptionForm
            subscriptionPlan={subscriptionPlan}
            price={priceString}
          />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">{t('billing.payment-title')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('billing.payment-subtitle')}
          </p>
        </div>
        <Separator />
        <PaymentMethodeForm
          defaultWillSubscriptionEnd={canceledAtPeriodEnd}
          nextBillingDate={nextBillingDate}
          cardBrand={capitalizeFirstLetter(cardBrand)}
          cardLast4digits={cardLast4digits}
        />
      </div>
      <CancelSubscriptionButton />
    </div>
  );
}
