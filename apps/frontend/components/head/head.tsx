import NextHead from 'next/head';

import siteConfig from 'site-config.json';

interface HeadProps {
	title: string;
	description?: string;
}

const url = `http://${siteConfig.site.domain}`;

const Head: React.FunctionComponent<HeadProps> = ({ title, description }) => {
	const finalDescription = description || siteConfig.site.description;

	return (
		<NextHead>
			<title>{`${title} | ${siteConfig.site.name}`}</title>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1.0"
			/>
			<meta name="description" content={finalDescription} />
			<meta name="robots" content="index, follow" />

			<meta property="og:title" content={title} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:description" content={finalDescription} />
			<meta property="og:site_name" content={siteConfig.site.name} />
			<meta property="og:image" content="/logo.png" />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:title" content={siteConfig.site.name} />
			<meta name="twitter:description" content={finalDescription} />
			<meta name="twitter:image" content={`/icon-192x192.png`} />
			<meta name="twitter:creator" content={siteConfig.author.twitter} />

			<meta name="application-name" content={siteConfig.site.name} />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="default"
			/>
			<meta
				name="apple-mobile-web-app-title"
				content={siteConfig.site.name}
			/>
			<meta name="format-detection" content="telephone=no" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="msapplication-TileColor" content="#2B5797" />
			<meta name="msapplication-tap-highlight" content="no" />
			<meta name="theme-color" content="#000000" />

			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="167x167"
				href="/apple-touch-icon.png"
			/>

			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="shortcut icon" href="/favicon.ico" />

			<link rel="canonical" href={url} />
		</NextHead>
	);
};

export default Head;
