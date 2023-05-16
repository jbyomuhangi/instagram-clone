export const generateRandomNumber = ({ min = 0, max = 100 } = {}): number => {
  const difference = max - min;
  const rand = Math.floor(Math.random() * difference) + min;
  return rand;
};
