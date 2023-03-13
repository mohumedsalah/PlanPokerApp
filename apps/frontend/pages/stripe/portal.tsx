import Head from 'components/head';
import StripeLoader from 'components/stripe-loader';
import stripeLayout from 'components/layout/stripe';

import requireSignIn from 'lib/auth/require-sign-in';
import { NextPageWithLayout } from 'pages/_app';
import { useEffect } from 'react';
import { useCreatePortal } from 'lib/queries/stripe';

const Portal: NextPageWithLayout = () => {
	const { mutateAsync: createPortal } = useCreatePortal();

	useEffect(() => {
		createPortal();
	}, [createPortal]);

	return (
		<>
			<Head title="Redirecting to Stripe" />
			<section className="flex justify-center items-center">
				<StripeLoader />
			</section>
		</>
	);
};

Portal.getLayout = stripeLayout;

export const getServerSideProps = requireSignIn;

export default Portal;
