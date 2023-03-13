import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { NextPage } from 'next';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';

import GoogleAnalytics from 'features/analytics/google';
import { api } from 'utils/api';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';

export type NextPageWithLayout = NextPage<{
	session: Session;
}> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{
	session: Session;
}> & {
	Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const [queryClient] = useState(() => new QueryClient());

	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<SessionProvider session={pageProps.session}>
			<ToastContainer />
			<QueryClientProvider client={queryClient}>
				{getLayout(
					<>
						<GoogleAnalytics />
						<Component {...pageProps} />
					</>
				)}
			</QueryClientProvider>
		</SessionProvider>
	);
};

export default api.withTRPC(MyApp);
