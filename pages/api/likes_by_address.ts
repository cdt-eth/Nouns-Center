import { NextApiRequest, NextApiResponse } from 'next';

import { getLikesForAddress } from '../../lib/db/hasura';

export default async function likes_by_address(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method == 'GET') {
    const { address } = req.query;
    if (!address) {
      res.status(403).send({ err: 'missing eoa' });
      return;
    }
    try {
      const likesByAddress = await getLikesForAddress(address as string);
      console.log({ address });
      console.log({ likesByAddress });
      let ids: number[] = [];
      if (likesByAddress?.length) {
        ids = likesByAddress.map((idea_liked) => {
          return idea_liked.idea_id;
        });
      }
      res.send({ success: true, data: ids });
    } catch (error) {
      console.error('Error occurred in /likes_by_address', error);
      res.status(500).send({ done: false, error: error?.message });
      return;
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} not supported`);
  }
}
