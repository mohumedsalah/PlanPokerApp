import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

const requireAuth = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (!session?.userId) {
		return res.status(401).json({ error: 'not-authenticated' });
	}

	return session.userId;
};

export default requireAuth;
