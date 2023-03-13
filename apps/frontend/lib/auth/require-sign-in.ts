import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

import type { GetServerSidePropsContext } from 'next';

const requireSignIn = async (context: GetServerSidePropsContext) => {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		authOptions
	);

	if (!session) {
		return {
			redirect: {
				destination: '/',
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};

export default requireSignIn;
