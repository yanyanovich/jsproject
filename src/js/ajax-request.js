export const fetchReviews = async () => {
  const res = await fetch('https://portfolio-js.b.goit.study/api/reviews');
  if (!res.ok) {
    throw new Error(res.status);
  }
  return await res.json();
};
