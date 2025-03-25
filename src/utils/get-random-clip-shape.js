const paths = ["flower", "star"];

export const randomClipPath = () => {
  return paths[Math.floor(Math.random() * paths.length)];
};
