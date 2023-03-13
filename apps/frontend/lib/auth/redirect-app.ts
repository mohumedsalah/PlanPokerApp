import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

import type { GetServerSidePropsContext } from 'next';

const redirectApp = async (context: GetServerSidePropsContext) => {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		authOptions
	);

	if (session) {
		return {
			redirect: {
				destination: '/app',
			},
		};
	}

	return {
		props: {},
	};
};

export default redirectApp;
