export const formatPostDate = (postdate) => {
  const date = new Date(postdate);

  return {
    date: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};
