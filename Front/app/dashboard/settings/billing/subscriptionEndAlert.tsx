'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useTranslation } from '@/i18n/client';
import { useSubscriptionStore } from '@/store/store';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function SubscriptionEndAlert({
  nextBillingDate,
}: {
  nextBillingDate: string;
}) {
  const { t } = useTranslation('settings');
  const { willSubscriptionEnd } = useSubscriptionStore();
  return (
    <>
      {willSubscriptionEnd && (
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            {t('billing.warning-subscription-end')} <b>{nextBillingDate}</b>{' '}
            {t('billing.warning-suggestion-subscription-end')}
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}
