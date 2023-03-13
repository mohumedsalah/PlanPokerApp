import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

import siteConfig from 'site-config.json';

const analyticsId = siteConfig.analytics.googleAnalytics;

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

const GoogleAnalytics: React.FunctionComponent = () => {
	const router = useRouter();

	const handleRouteChange = (url: string) => {
		if (!isProduction) return;

		//@ts-ignore
		if (window.gtag && analyticsId) {
			//@ts-ignore
			window.gtag('config', analyticsId, {
				page_path: url,
			});
		}
	};

	useEffect(() => {
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	if (!isProduction) {
		return null;
	}

	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
			/>

			<Script id="analytics" strategy="lazyOnload">
				{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${analyticsId}', {
        page_path: window.location.pathname,
        });
    `}
			</Script>
		</>
	);
};

export default GoogleAnalytics;
