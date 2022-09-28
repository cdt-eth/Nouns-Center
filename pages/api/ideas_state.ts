import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../lib/utils';
import { adminEOAList } from '../../lib/db/admins';
import { setIdeaState } from '../../lib/db/hasura';

export default async function hide(req: NextApiRequest, res: NextApiResponse) {
  let hideRespJson = { success: false };
  const { method } = req;

  if (method == 'POST') {
    try {
      const jwtToken = req.cookies.nc;
      if (!jwtToken) {
        return res.send(hideRespJson);
      }

      const verifiedAddress = await verifyToken(jwtToken);
      if (!verifiedAddress || !adminEOAList.includes(verifiedAddress.toLowerCase())) {
        return res.send(hideRespJson);
      }

      const { ideaId, state } = req.body;

      if (ideaId && state !== undefined) {
        const setIdeaStateResp = await setIdeaState(ideaId, state);
        if (setIdeaStateResp) {
          hideRespJson.success = true;
        }
      }
      res.send(hideRespJson);
    } catch (error) {
      console.log({ error });
      res.status(501).send(hideRespJson);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).send(`Method ${method} Not Allowed`);
  }
}
