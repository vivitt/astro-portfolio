const paths = ["flower", "arrow", "star"];

export const randomClipPath = () => {
  return paths[Math.floor(Math.random() * paths.length)];
};
