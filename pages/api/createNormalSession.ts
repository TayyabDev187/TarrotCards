import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);


export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' } as any);
    }

    try {
        const { amount } = req.body;

        const session = await stripe.paymentIntents.create({
            currency: "usd",
            amount,
        });

        res.status(200).json(session);
    } catch (error: any) {
        console.error('Error creating onramp session:', error.message);
        res.status(500).json({ message: 'Internal Server Error' } as any);
    }
}
