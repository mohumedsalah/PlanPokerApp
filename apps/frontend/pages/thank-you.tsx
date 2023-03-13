import Head from 'components/head';
import appLayout from 'components/layout/app';

import requireSignIn from 'lib/auth/require-sign-in';
import useTranslation from 'next-translate/useTranslation';

import type { NextPageWithLayout } from 'pages/_app';

const ThankYou: NextPageWithLayout = () => {
	const { t } = useTranslation('thank-you');

	return (
		<>
			<Head title="Thank you" />
			<section className="section">
				<h1 className="text-3xl font-semibold text-center mb-3">
					{t('title')}
				</h1>
				<p className="text-center text-slate-600">{t('description')}</p>
			</section>
		</>
	);
};

ThankYou.getLayout = appLayout;

export const getServerSideProps = requireSignIn;

export default ThankYou;
