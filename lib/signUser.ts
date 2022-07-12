export const signUser = async (address, signer) => {
  const authRespJson = { success: false, admin: false }

  try {
    const authResp = await fetch('/api/me');
    const authData = await authResp.json();
    if (!authData?.success) {
      if (!address) return authRespJson;

      const message = `${new Date().toDateString()} Nouns.Center`;
      const signature = await signer.signMessage(message);

      // verify signature
      const loginResp = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature, address }),
      });
      const authData = await loginResp.json();
      if (authData?.success) {
          authRespJson.success = true;
      }
      if (authData?.admin) {
          authRespJson.admin = true;
      }
    }
    return authRespJson;
  } catch (error) {
    console.log({ error });
    return authRespJson;
  }
};
