import CheckoutForm from "@/components/CheckoutForm";
import { useStripeContext } from "@/context";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import React from "react";

function CheckoutPage() {
  const { push } = useRouter()
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_PUB_KEY as string
  );
  const { clientSecret } = useStripeContext();

  if (!clientSecret) { push('/') };
  return (
    <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}

export default CheckoutPage;
