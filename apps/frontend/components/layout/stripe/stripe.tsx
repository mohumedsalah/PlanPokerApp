import type { ReactElement } from 'react';

const stripeLayout = (page: ReactElement) => {
	return (
		<main className="h-screen flex justify-center items-center">
			{page}
		</main>
	);
};

export default stripeLayout;
