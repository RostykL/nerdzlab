export const checkInputData = data => {
  data = {
    ...data,
    price: Number(data.price),
    is_available: Boolean(data.is_available),
  };
  return data;
};
