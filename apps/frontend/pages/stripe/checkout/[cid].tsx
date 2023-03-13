import { useRouter } from 'next/router';

import Head from 'components/head';
import StripeLoader from 'components/stripe-loader';
import stripeLayout from 'components/layout/stripe';

import requireSignIn from 'lib/auth/require-sign-in';
import { NextPageWithLayout } from 'pages/_app';
import { useEffect } from 'react';
import { useCreateCheckout } from 'lib/queries/stripe';

const Checkout: NextPageWithLayout = () => {
	const { query } = useRouter();

	const { mutateAsync: createCheckout } = useCreateCheckout();

	useEffect(() => {
		if (query.cid) {
			createCheckout({ price: query.cid as string });
		}
	}, [query.cid, createCheckout]);

	return (
		<>
			<Head title="Redirecting to Stripe" />
			<section className="flex justify-center items-center">
				<StripeLoader />
			</section>
		</>
	);
};

Checkout.getLayout = stripeLayout;

export const getServerSideProps = requireSignIn;

export default Checkout;
