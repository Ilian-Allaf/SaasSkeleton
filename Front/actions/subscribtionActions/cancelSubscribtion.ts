


export async function CancelSubscribtion(password: string) {
    const stripe = require('stripe')('sk_test_51OVg8nBeHVeQHE2Ct23xnig4Aq3pthBFfCbvCRv8TMwCqasTeRFVaoGZHLUjkfXPDdVx8cy2er1VicuQLmdiCuQd00Cun7hvib');
    const subscription = await stripe.subscriptions.cancel(
    'sub_1MlPf9LkdIwHu7ixB6VIYRyX'
    );
}