import Stripe from 'stripe';
import prisma from 'lib/prisma';

export const upsertProduct = async (product: Stripe.Product) => {
	await prisma.product.upsert({
		where: {
			id: product.id,
		},
		create: {
			id: product.id,
			description: product.description as string,
			name: product.name,
		},
		update: {
			description: product.description as string,
			name: product.name,
		},
	});
	console.log(`Product updated: ${product.id}`);
};

export const upsertPrice = async (price: Stripe.Price) => {
	const recurring = price.recurring as Stripe.Price.Recurring;
	const interval = recurring.interval;

	await prisma.price.upsert({
		where: {
			id: price.id,
		},
		create: {
			id: price.id,
			amount: price.unit_amount as number,
			currency: price.currency,
			interval,
			productId: price.product as string,
		},
		update: {
			amount: price.unit_amount as number,
			currency: price.currency,
			interval,
			productId: price.product as string,
		},
	});
	console.log(`Price updated: ${price.id}`);
};

export const upsertSubscription = async (subscription: Stripe.Subscription) => {
	const customerId = subscription.customer.toString();

	const items = subscription.items.data as Stripe.SubscriptionItem[];

	if (customerId) {
		await prisma.subscription.upsert({
			where: {
				id: subscription.id,
			},
			create: {
				id: subscription.id,
				status: subscription.status,
				items: {
					connect: items.map((item) => ({ id: item.price.id })),
				},
				customerId,
			},
			update: {
				status: subscription.status,
				items: {
					set: items.map((item) => ({ id: item.price.id })),
				},
				customerId,
			},
		});
		console.log(`Subscription updated: ${subscription.id}`);
	} else {
		console.log("❌ Customer doesn't exist");
	}
};

export const deleteSubscription = async (subscription: Stripe.Subscription) => {
	await prisma.subscription.delete({
		where: {
			id: subscription.id,
		},
	});
	console.log(`Subscription deleted: ${subscription.id}`);
};
