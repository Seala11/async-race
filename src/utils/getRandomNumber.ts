const getRandomNumber = (min: number, max: number) => {
  const range = max - min;
  const random = Math.floor(Math.random() * range);
  return min + (random === 0 ? random + 1 : random);
};

export default getRandomNumber;
