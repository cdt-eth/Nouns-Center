import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../lib/utils';

import { insertIdea } from '../../lib/db/hasura';

export default async function ideas(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method == 'POST') {
    try {
      const token = req.cookies.nc;
      if (!token) {
        res.status(403).send({});
      } else {
        const { title, tldr, description } = req.body;
        if (
          title?.length >= 8 &&
          tldr?.length >= 8 &&
          description?.length >= 50
        ) {
          const address = await verifyToken(token);
          // insert idea
          const response = await insertIdea(token, {
            address,
            title,
            tldr,
            description,
          });

          if (response?.data?.insert_ideas_one) {
            const createdData = response?.data?.insert_ideas_one;
            res.send({ success: true, data: createdData });
          } else {
            res.status(500).send({});
          }
        } else {
          res.status(403).send({ success: false });
        }
      }
    } catch (error) {
      console.error('Error occurred in /ideas', error);
      res.status(500).send({ done: false, error: error?.message });
    }
  } else if (method == 'GET') {
    // const response = await getIdeas();
    // console.log('response: ', response);
    // res.send({ success: true, data: response });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
