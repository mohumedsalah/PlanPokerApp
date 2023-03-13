import Head from 'components/head';
import homeLayout from 'components/layout/home/home';
import Benefits from 'features/landing/benefits/benefits';
import Hero from 'features/landing/hero';

import checkSignIn from 'lib/auth/check-sign-in';

import type { NextPageWithLayout } from 'pages/_app';

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head title="Start Your Next SaaS" />
			<Hero />
			<Benefits />
		</>
	);
};

Home.getLayout = homeLayout;

export const getServerSideProps = checkSignIn;

export default Home;
