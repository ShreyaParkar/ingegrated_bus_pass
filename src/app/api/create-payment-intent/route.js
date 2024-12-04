import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { amount } = await request.json();  // Amount should be passed in cents

  try {
    // Create a payment intent with the specified amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount,  // e.g., 1000 = $10.00
      currency: 'usd',  // Specify your currency
      payment_method_types: ['card'],  // Accept card payments
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
