import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	FiActivity,
	FiDollarSign,
	FiLogOut,
	FiCreditCard,
} from 'react-icons/fi';
import useTranslation from 'next-translate/useTranslation';

import logo from 'assets/img/logo.png';
import { signOut } from 'next-auth/react';
import { useSubscription } from 'lib/auth/hooks';

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
	const { t } = useTranslation('common');
	const { hasSubscription } = useSubscription();

	const links = useMemo(
		() =>
			[
				{
					icon: <FiActivity />,
					key: 'dashboard',
					href: '/app/dashboard',
					show: true,
				},
				{
					icon: <FiDollarSign />,
					key: 'pricing',
					href: '/app/pricing',
					show: true,
				},
				{
					icon: <FiCreditCard />,
					key: 'billing',
					href: '/stripe/portal',
					show: hasSubscription,
				},
				{
					icon: <FiLogOut />,
					key: 'sign-out',
					href: '#',
					onClick: () => signOut(),
					show: true,
				},
			].filter((link) => link.show),
		[hasSubscription]
	);

	return (
		<aside className="bg-white z-50 fixed lg:p-8 left-0 bottom-0 right-0 lg:right-auto lg:top-0 border-t lg:border-t-0 lg:border-r border-slate-200">
			<nav>
				<Link href="/" passHref>
					<a className="hidden lg:block mr-12 max-w-[100px] items-center mt-4">
						<Image src={logo} alt="logo" />
					</a>
				</Link>
				<ul className="flex lg:flex-col items-center lg:items-start justify-center lg:mt-9">
					{links.map((link) => (
						<li
							key={link.key}
							className="lg:mb-3 last:mb-0"
							onClick={link.onClick}
						>
							<Link href={link.href} passHref>
								<a className="flex items-center lg:justify-start text-slate-500 py-5 lg:py-3 px-4 lg:px-0 ">
									<span className="text-2xl lg:text-xl lg:mr-3">
										{link.icon}
									</span>
									<span className="hidden lg:block text-sm font-medium tracking-tight">
										{t(`links.${link.key}`)}
									</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
