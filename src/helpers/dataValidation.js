export const checkInputData = data => ({
  ...data,
  title: String(data.title),
  price: Number(data.price),
  is_available: data.is_available,
});
