import { NextApiRequest, NextApiResponse } from 'next';

import prisma from 'lib/prisma';
import { stripe } from 'lib/stripe';
import requireAuth from 'lib/auth/require-auth';

const post = async (req: NextApiRequest, res: NextApiResponse) => {
	const userId = (await requireAuth(req, res)) as string;

	try {
		const customer = await prisma.customer.findUnique({
			where: { userId },
		});

		if (!customer)
			return res.status(422).json({ error: 'customer-not-exist' });

		const { url } = await stripe.billingPortal.sessions.create({
			customer: customer.id,
			return_url: `${req.headers.origin}/app`,
		});

		return res.status(200).json({ data: url });
	} catch (err: any) {
		console.log(err);
		return res
			.status(500)
			.json({ error: { statusCode: 500, message: err.message } });
	}
};

export default post;
