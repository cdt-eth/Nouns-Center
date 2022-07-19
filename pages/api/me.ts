import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../lib/utils';
import { removeTokenCookie } from '../../lib/cookies';
import { adminEOAList } from '../../lib/db/admins';

interface LoginRespJson {
  loggedIn: boolean;
  admin: boolean;
  address: boolean | string;
}

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method == 'GET') {
    const { address } = req.query;
    const respJson: LoginRespJson = {
      loggedIn: false,
      admin: false,
      address: false,
    };
    try {
      const jwtToken = req.cookies.nc;
      if (!jwtToken) {
        res.send(respJson);
      } else {
        const verifiedAddress = await verifyToken(jwtToken);
        if (verifiedAddress && verifiedAddress == address) {
          respJson.loggedIn = true;
          respJson.address = verifiedAddress;
          if (adminEOAList.includes(verifiedAddress)) {
            respJson.admin = true;
          }
        } else {
          removeTokenCookie('nc', res);
        }
        res.send(respJson);
      }
    } catch (error) {
      res.status(401);
      res.send(respJson);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} not supported`);
  }
}
