import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useSession } from 'next-auth/react';

import Container from 'components/container';

import logo from 'assets/img/logo.png';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
	const { t } = useTranslation('common');
	const { status } = useSession();

	const isSignIn = status === 'authenticated';

	return (
		<>
			<header className="py-8 lg:py-12 section-x absolute top-0 left-0 right-0">
				<Container>
					<nav className="flex justify-between">
						<Link href="/" passHref>
							<a className="mr-12 max-w-[150px] flex items-center">
								<Image src={logo} alt="logo" />
							</a>
						</Link>
						<Link href={isSignIn ? '/app' : '/sign-in'} passHref>
							<a className="btn-outline">
								{t(isSignIn ? 'to-app' : 'sign-in')}
							</a>
						</Link>
					</nav>
				</Container>
			</header>
		</>
	);
};

export default Header;
