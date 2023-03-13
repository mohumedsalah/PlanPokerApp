import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		subscriptionItems: Product[];
		userId?: string;
	}
}
