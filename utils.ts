export const getRandomNounPic = () => {
  const min = 0;
  const max = 247;

  const nounId = Math.floor(Math.random() * (max - min + 1) + min);

  return `https://noun.pics/${nounId}`;
};
