import type { ReactElement } from 'react';

const authLayout = (page: ReactElement) => {
	return (
		<div className="min-h-screen flex">
			<section className="lg:max-w-lg flex-1 py-8 px-12 lg:px-16 ">
				{page}
			</section>
			<section className="hidden lg:flex flex-1 gradient justify-center items-center section">
				<strong className="text-white text-3xl max-w-lg text-center">
					Join over 1,000+ developers, indie makers, and startup
					founders.
				</strong>
			</section>
		</div>
	);
};

export default authLayout;
