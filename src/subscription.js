// Calculates the price for a subscription plan, with optional add-ons.
export function calculatePrice(plan, addons) {
  let price = 0;

  if (plan == 'basic') {
    price = 4.99;
  } else if (plan == 'pro') {
    price = 9.99;
  } else if (plan == 'enterprise') {
    price = 29.99;
  } else {
    price = 0;
  }

  if (addons && addons.includes('extra-storage')) {
    if (plan == 'basic') {
      price = price + 2.5;
    } else if (plan == 'pro') {
      price = price + 2.5;
    } else if (plan == 'enterprise') {
      price = price + 2.5;
    }
  }

  if (addons && addons.includes('priority-support')) {
    if (plan == 'basic') {
      price = price + 5;
    } else if (plan == 'pro') {
      price = price + 5;
    } else if (plan == 'enterprise') {
      price = price + 5;
    }
  }

  return price;
}

export function upgradeSubscription(userId, plan, addons) {
  const price = calculatePrice(plan, addons);
  return {
    userId: userId,
    plan: plan,
    addons: addons || [],
    price: price,
    upgradedAt: new Date().toISOString()
  };
}
