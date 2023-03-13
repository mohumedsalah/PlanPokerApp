import { signIn } from 'next-auth/react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import logo from 'assets/img/favicon.png';

interface SignInProps {}

const providers = [{ title: 'Google', onClick: () => signIn('google') }];

const SignIn: React.FunctionComponent<SignInProps> = () => {
	const { t } = useTranslation('sign-in');

	return (
		<div className="flex justify-center items-center h-full">
			<main className="flex flex-col w-full max-w-md">
				<div className="max-w-[56px]">
					<Image src={logo} alt="logo" />
				</div>
				<h2 className="text-2xl font-bold tracking-tight mt-3 mb-1">
					{t('title')}
				</h2>
				<p className="text-sm text-slate-500 font-thin mb-6">
					{t('description')}
				</p>
				<ul>
					{providers.map((provider) => (
						<li key={provider.title} className="mb-3 last:mb:0">
							<button
								className="btn-auth w-full"
								onClick={provider.onClick}
							>
								{t('continue', { provider: provider.title })}
							</button>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};

export default SignIn;
