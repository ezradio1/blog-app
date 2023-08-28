const randomNum = Math.floor(Math.random() * (200 - 150 + 1)) + 150;
export const generateRandomImage = (index = 99) =>
  `${process.env.NEXT_PUBLIC_IMAGE_URL}200?random=${index}`;
