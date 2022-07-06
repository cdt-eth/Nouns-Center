import jwt from 'jsonwebtoken';

interface JwtPayload {
  eoa: string;
}

export async function verifyToken(token) {
  if (token) {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as JwtPayload;

    return decodedToken?.eoa;
  }

  return null;
}

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
export function truncateEthAddress(address: string) {
  const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
}

export async function getAddressFromContext(context) {
  const token = context.req ? context.req.cookies?.nc : null;

  const address = await verifyToken(token);

  return address;
}
