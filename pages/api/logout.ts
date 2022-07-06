import { removeTokenCookie } from '../../lib/cookies';
import { verifyToken } from '../../lib/utils';

export default async function logout(req, res) {
  try {
    if (!req.cookies.nc)
      return res.status(401).json({ message: 'User is not logged in' });

    removeTokenCookie('nc', res);
    //redirects user to ideas
    res.writeHead(302, { Location: '/ideas' });
    res.end();
  } catch (error) {
    console.error({ error });
    res.status(401).json({ message: 'User is not logged in' });
  }
}
