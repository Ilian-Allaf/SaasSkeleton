import { authOptions } from '@/auth/[...nextauth]';
import { detectLanguage, useTranslation } from '@/i18n/index';
import { setupGraphQLClient } from '@/lib/gqlClient';
import { setupUnauthenticatedGraphQLClient } from '@/lib/unauthenticatedGqlClient';
import {
  GetSubscriptionPlansDocument,
  GetSubscriptionPlansQuery,
  GetUserDocument,
  GetUserQuery,
} from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import Stripe from 'stripe';
import Skeleton from './skeleton';

export type Plans = {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  actionLabel: string;
  yearly_stripe_id: string;
  monthly_stripe_id: string;
}[];

export default async function Page() {
  const { t } = await useTranslation('pricing');

  async function getPriceFromStripe({
    priceId,
  }: {
    priceId: string;
  }): Promise<number> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: '2023-10-16',
    });

    const price = await stripe.prices.retrieve(priceId);
    if (!price.unit_amount) {
      throw new Error(`Le prix avec l'ID ${priceId} n'a pas été trouvé.`);
    }

    return price.unit_amount / 100;
  }

  async function transformSubscriptionPlans({
    subscribtionPlans,
    userPlan,
  }: {
    subscribtionPlans: GetSubscriptionPlansQuery;
    userPlan: GetUserQuery;
  }): Promise<Plans> {
    const transformedSubscriptionPlans: Plans = [];
    for (const plan of subscribtionPlans.subscribtion_plan) {
      let name = '';
      let description = '';

      plan.text_content.translations.forEach((translation) => {
        if (translation.text_label === 'name') {
          name = translation.translation;
        } else if (translation.text_label === 'description') {
          description = translation.translation;
        }
      });

      const monthlyPriceId = plan.stripe_monthly_price_id;
      const yearlyPriceId = plan.stripe_yearly_price_id;

      const monthlyPrice = await getPriceFromStripe({
        priceId: monthlyPriceId,
      });
      const yearlyPrice = await getPriceFromStripe({ priceId: yearlyPriceId });

      const features = plan.subscribtion_plan_subscribtion_feature_assocs.map(
        (assoc) =>
          assoc.subscribtionFeatureBySubscribtionFeature.text_content
            .translations[0].translation
      );

      const planObject = {
        title: name,
        monthlyPrice: monthlyPrice,
        yearlyPrice: yearlyPrice,
        description: description,
        features: features,
        actionLabel:
          userPlan.auth_user_by_pk?.subscribtion_plan === plan.name
            ? t('upgrade-button')
            : t('subscribe-button'),
        popular: plan.popular,
        yearly_stripe_id: yearlyPriceId,
        monthly_stripe_id: monthlyPriceId,
      };

      transformedSubscriptionPlans.push(planObject);
    }

    return transformedSubscriptionPlans;
  }

  const lng = await detectLanguage();
  const session = await getServerSession(authOptions);
  const gqlClient = session
    ? await setupGraphQLClient()
    : await setupUnauthenticatedGraphQLClient();
  let userPlan: GetUserQuery = {};
  if (session) {
    userPlan = await gqlClient!.request(GetUserDocument, {
      id: session.user.id,
    });
  }

  const subscribtionPlans = await gqlClient!.request(
    GetSubscriptionPlansDocument,
    { languageCode: lng }
  );
  const transformedSubscribtionPlans = await transformSubscriptionPlans({
    subscribtionPlans,
    userPlan,
  });

  return (
    <>
      <Skeleton subscribtionPlans={transformedSubscribtionPlans} />
    </>
  );
}
