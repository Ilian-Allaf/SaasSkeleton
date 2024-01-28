import React from 'react'
import Skeleton from './skeleton'



export default async function page() {

  type Plan = {
    name: string;
    price: number;
    features: string[];
    price_id: string;
  };

  const plans:Plan[] = [
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

  return (
    <>
      <Skeleton plans={plans}/>
    </>
  )
};
