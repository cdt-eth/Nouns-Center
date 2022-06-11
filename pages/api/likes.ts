import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../lib/utils';

import {
  isLikedForIdeaAndAddress,
  updateLikedForIdeaAndAddress,
  insertLikedForIdeaAndAddress,
} from '../../lib/db/hasura';

export default async function likes(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method == 'POST') {
    try {
      const jwtToken = req.cookies.nc;
      if (!jwtToken) {
        res
          .status(403)
          .send({ success: false, message: 'missing auth cookie' });
      } else {
        const address = await verifyToken(jwtToken);
        if (address) {
          const { ideaId, liked } = req.body;
          const likeExists = await isLikedForIdeaAndAddress(
            jwtToken,
            ideaId,
            address
          );

          if (likeExists) {
            console.log(`isUpdate: ${likeExists}, flip to liked: ${liked}`);
            // update
            const updateResponse = await updateLikedForIdeaAndAddress(
              jwtToken,
              ideaId,
              address,
              liked
            );
            res.send({
              success: true,
              data: updateResponse.update_ideas_likes.returning,
            });
          } else {
            // insert
            const insertResponse = await insertLikedForIdeaAndAddress(
              jwtToken,
              ideaId,
              address
            );
            res.send({
              success: true,
              data: insertResponse.insert_ideas_likes_one,
            });
          }
        } else {
          res
            .status(403)
            .send({ success: false, message: 'invalid address in cookie' });
        }
      }
    } catch (error) {
      console.error('Error occurred in /ideas', error);
      res.status(500).send({ done: false, error: error?.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} not supported`);
  }
}
