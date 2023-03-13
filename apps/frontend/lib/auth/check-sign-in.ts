import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

import type { GetServerSidePropsContext } from 'next';

const checkSignIn = async (context: GetServerSidePropsContext) => {
	return {
		props: {
			session: await unstable_getServerSession(
				context.req,
				context.res,
				authOptions
			),
		},
	};
};

export default checkSignIn;
