export const signUser = async (accountData, signer) => {
  try {
    const authResp = await fetch('/api/me');
    const authData = await authResp.json();
    if (!authData?.success) {
      const address = accountData?.address;

      if (!address) return;

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
      if (loginResp.status == 200) {
        return true;
      }
      return false;
    }

    return true;
  } catch (error) {
    console.log({ error });
    return false;
  }
};
