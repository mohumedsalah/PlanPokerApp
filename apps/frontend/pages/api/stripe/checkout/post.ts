import { NextApiRequest, NextApiResponse } from 'next';

import prisma from 'lib/prisma';
import { stripe } from 'lib/stripe';
import requireAuth from 'lib/auth/require-auth';

const post = async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req;
	const userId = (await requireAuth(req, res)) as string;

	const price = String(body.price);

	if (!price) {
		return res.status(422).json({ error: 'price-required' });
	}

	try {
		// Try to retrieve customer
		let customer = await prisma.customer.findUnique({ where: { userId } });

		// If customer doesn't exist, create it
		if (!customer) {
			// Create stripe customer
			const stripeCustomer = await stripe.customers.create({
				metadata: { uid: userId },
			});

			// Create customer in database
			customer = await prisma.customer.create({
				data: { userId, id: stripeCustomer.id },
			});
		}

		// Try to find subscription for a customer
		const subscription = await prisma.subscription.findUnique({
			where: {
				customerId: customer?.id,
			},
		});

		if (subscription) {
			res.status(409).json({
				error: {
					statusCode: 409,
					message: 'subscription-already-exists',
				},
			});
		}

		// Create checkout session
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			billing_address_collection: 'required',
			customer: customer.id,
			line_items: [
				{
					price,
					quantity: 1,
				},
			],
			mode: 'subscription',
			allow_promotion_codes: true,
			// Uncomment this if you want to provide free trial
			// subscription_data: {
			//   trial_period_days: 7,
			// },
			success_url: `${req.headers.origin}/thank-you`,
			cancel_url: `${req.headers.origin}/app`,
		});

		return res.status(200).json({ data: session.id });
	} catch (err: any) {
		console.log(err);
		res.status(500).json({
			error: { statusCode: 500, message: err.message },
		});
	}
};

export default post;
