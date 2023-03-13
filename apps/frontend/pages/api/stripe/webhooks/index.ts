import { stripe } from 'lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Readable } from 'node:stream';

import {
	upsertSubscription,
	deleteSubscription,
	upsertPrice,
	upsertProduct,
} from 'lib/stripe/functions';

// Stripe requires the raw body to construct the event.
export const config = {
	api: {
		bodyParser: false,
	},
};

async function buffer(readable: Readable) {
	const chunks = [];
	for await (const chunk of readable) {
		chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
	}
	return Buffer.concat(chunks);
}

const relevantEvents = new Set([
	'product.created',
	'product.updated',
	'price.created',
	'price.updated',
	'checkout.session.completed',
	'customer.subscription.created',
	'customer.subscription.updated',
	'customer.subscription.deleted',
]);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const buf = await buffer(req);
		const sig = req.headers['stripe-signature'];
		const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
		let event: Stripe.Event;

		try {
			if (!sig || !webhookSecret) return;
			event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
		} catch (err: any) {
			console.log(`❌ Error message: ${err.message}`);
			return res.status(400).send(`Webhook Error: ${err.message}`);
		}

		if (relevantEvents.has(event.type)) {
			try {
				switch (event.type) {
					case 'price.created':
					case 'price.updated':
						await upsertPrice(event.data.object as Stripe.Price);
						break;
					case 'product.created':
					case 'product.updated':
						await upsertProduct(
							event.data.object as Stripe.Product
						);
						break;
					// Subscription is updated immidiately after creation.
					// Usually, it's enough to listen for update events
					// case "customer.subscription.created":
					case 'customer.subscription.updated':
						await upsertSubscription(
							event.data.object as Stripe.Subscription
						);
						break;
					case 'customer.subscription.deleted':
						await deleteSubscription(
							event.data.object as Stripe.Subscription
						);
						break;
					default:
						throw new Error('Unhandled relevant event!');
				}
			} catch (error) {
				console.log(error);
				return res
					.status(400)
					.send(
						'Webhook error: "Webhook handler failed. View logs."'
					);
			}
		}

		res.status(200).json({ received: true });
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
};

export default handler;
