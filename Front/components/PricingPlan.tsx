import React from 'react';

const plans = [
  {
    name: 'Hobby',
    price: 15,
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
    price_id: 'price_1OVx69BeHVeQHE2CtarYVQK6',
  },
  {
    name: 'Freelancer',
    price: 30,
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    price_id: 'price_1OVx69BeHVeQHE2CtarYVQK6',
  },
  {
    name: 'Startup',
    price: 60,
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time', 'Marketing automations'],
    price_id: 'price_1OVx69BeHVeQHE2CtarYVQK6',
  },
  {
    name: 'Enterprise',
    price: 90,
    features: ['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', '1-hour, dedicated support response time', 'Marketing automations', 'Custom reporting tools'],
    price_id: 'price_1OVx69BeHVeQHE2CtarYVQK6',
  },
];

const Subscribe = async (price_id: string) => {
  try {
    const response = await fetch('/api/subscribtion/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price_id: price_id }),
    });
    if (!response.ok) {
      window.location.href =(await response.json()).url;
    }
  } catch (error) {
    console.error('An error occurred', error);
  }
};

const PricingPlan = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
            Pricing plans for teams of all sizes
          </h2>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
            Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className="mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map(plan => (
              <li key={plan.name} className="flex flex-col">
                <div className="flex-1 border-2 border-gray-200 rounded-xl shadow-sm p-6 flex flex-col hover:border-indigo-600 transition-colors duration-2">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                    /month
                  </p>
                  <button className="mt-6 w-full border border-indigo-600 text-indigo-600 bg-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                  onClick={() => Subscribe(plan.price_id)}
                  >
                    Buy plan
                  </button>
                  <ul className="mt-6 space-y-4 flex-1">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          {/* Replace with your checkmark icon */}
                          <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
