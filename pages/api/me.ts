import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../lib/utils';

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method == 'GET') {
    try {
      const jwtToken = req.cookies.nc;
      if (!jwtToken) {
        res.status(403).send({ success: false });
      } else {
        const address = await verifyToken(jwtToken);
        if (address) {
          res.send({ success: true, address });
        } else {
          res.status(403).send({ success: false });
        }
      }
    } catch (error) {
      res.status(401);
      res.send({ address: null });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} not supported`);
  }
}
