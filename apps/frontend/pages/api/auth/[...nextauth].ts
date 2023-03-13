import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from 'lib/prisma';

const providers = [
	// To add more providers, check out Provider documentation
	// https://next-auth.js.org/providers
	GoogleProvider({
		clientId: process.env.GOOGLE_ID as string,
		clientSecret: process.env.GOOGLE_SECRET as string,
	}),
];

export const authProviders = providers.map((provider) => ({
	id: provider.id,
	name: provider.name,
}));

export const authOptions: NextAuthOptions = {
	callbacks: {
		session: async ({ session, user }) => {
			const customer = await prisma.customer.findUnique({
				where: {
					userId: user.id,
				},
				select: {
					subscription: {
						select: {
							items: {
								select: {
									product: {
										select: {
											name: true,
										},
									},
								},
							},
						},
					},
				},
			});

			const subscriptionItems = customer?.subscription?.items || [];

			session.userId = user.id;
			session.subscriptionItems = subscriptionItems;
			return Promise.resolve(session);
		},
	},
	adapter: PrismaAdapter(prisma),
	providers,
	session: {
		strategy: 'database',
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	pages: {
		newUser: '/app/pricing',
	},
	// Enable debug messages in the console if you are having problems
	debug: false,
};

export default NextAuth(authOptions);
