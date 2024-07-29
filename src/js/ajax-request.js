export const fetchReviews = async () => {
  const res = await fetch('https://portfolio-js.b.goit.study/api/reviews');
  if (!res.ok) {
    throw new Error(res.status);
  }
  return await res.json();
};

export const submitForm = async dataLoad => {
  const response = await fetch(
    'https://portfolio-js.b.goit.study/api/requests',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataLoad),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
