import { useSession } from 'next-auth/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = () => {
	const { t } = useTranslation('home');
	const { status } = useSession();

	const isSignedIn = status === 'authenticated';

	return (
		<section className="section">
			<article className="flex flex-col items-center pt-36 lg:pt-48">
				<h1 className="text-center font-extrabold tracking-tight text-3xl lg:text-6xl mb-2 lg:mb-6">
					{t('title')}
				</h1>
				<h2 className="text-center text-gray-600 lg:text-lg mb-4 lg:mb-6">
					{t('description')}
				</h2>
				<Link href={isSignedIn ? '/app' : 'sign-in'} passHref>
					<a className="btn-primary py-3 px-8 font-bold text-xl tracking-tight rounded-full text-white">
						{t('join')}
					</a>
				</Link>
			</article>
		</section>
	);
};

export default Hero;
