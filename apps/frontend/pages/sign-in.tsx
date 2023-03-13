import Head from 'components/head';
import authLayout from 'components/layout/auth/auth';
import SignIn from 'features/sign-in';
import redirectApp from 'lib/auth/redirect-app';

import type { NextPageWithLayout } from 'pages/_app';

const SignInPage: NextPageWithLayout = () => {
	return (
		<>
			<Head title="Sign In" />
			<SignIn />
		</>
	);
};

SignInPage.getLayout = authLayout;

export const getServerSideProps = redirectApp;

export default SignInPage;
