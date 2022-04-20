export const getRandomNounPic = (idx: number) => {
  // const nounId = Math.floor(Math.random() * (max - min + 1) + min);

  return `https://noun-api.com/beta/pfp/?utm_source=${idx}`;
};
