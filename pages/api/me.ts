import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../lib/utils';

interface LoginRespJson {
  success: boolean;
  admin: boolean;
  address: boolean | string;
}

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method == 'GET') {
    const { address } = req.query;
    const adminEOAList = ['0x80dEdf478Df0f8F89aD085799dF5A0aadCB56664'];
    const respJson: LoginRespJson = {
      success: false,
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
          respJson.success = true;
          respJson.address = verifiedAddress;
          if (adminEOAList.includes(verifiedAddress)) {
            respJson.admin = true;
          }
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
