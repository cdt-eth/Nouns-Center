import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ethers } from 'ethers';
import { isNewUser, createNewUser } from '../../lib/db/hasura';
import { adminEOAList } from '../../lib/db/admins';

import { setTokenCookie } from '../../lib/cookies';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  let loginRespJson = { success: false, admin: false }
  const { method } = req;
  if (method == 'POST') {
    try {
      const { message, signature, address } = req.body;
      const recoveredAddress = ethers.utils.verifyMessage(message, signature);
      if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
        const token = jwt.sign(
          {
            eoa: address,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
            'https://hasura.io/jwt/claims': {
              'x-hasura-allowed-roles': ['user', 'admin'],
              'x-hasura-default-role': 'user',
              'x-hasura-user-id': `${address}`,
            },
          },
          process.env.JWT_SECRET
        );
        const isNewUserQuery = await isNewUser(token, recoveredAddress);
        isNewUserQuery && (await createNewUser(token, recoveredAddress));
        setTokenCookie('nc', token, res);
        loginRespJson.success = true;
        if (adminEOAList.includes(recoveredAddress)) {
            loginRespJson.admin = true;
        }
        res.json(loginRespJson);
      } else {
        res.status(403).send(loginRespJson);
      }
    } catch (error) {
      res.json(loginRespJson);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
