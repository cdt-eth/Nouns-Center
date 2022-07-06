import cookie from 'cookie';

const MAX_AGE = 7 * 24 * 60 * 60;

export const setTokenCookie = (name, token, res) => {
  const setCookie = cookie.serialize(name, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
  res.setHeader('Set-Cookie', setCookie);
};

export const removeTokenCookie = (name, res) => {
  const val = cookie.serialize(name, '', {
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', val);
};
