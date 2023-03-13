import type { NextApiRequest, NextApiResponse } from 'next';

import post from './post';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			return post(req, res);
		default:
			return res.status(405).end('Method Not Allowed');
	}
};

export default handler;
