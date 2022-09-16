import getRandomNumber from './getRandomNumber';

const getRandomColor = () => {
  const rgbNumbers = new Array(3).fill(0);

  const randomRGB = rgbNumbers.map((number) => number + getRandomNumber(0, 256));

  const randomHex = randomRGB.map((color) => {
    const hex = color.toString(16);
    return hex.length === 1 ? `${hex}0` : hex;
  });

  const randomColor = `#${randomHex.join('')}`;

  return randomColor;
};

export default getRandomColor;
