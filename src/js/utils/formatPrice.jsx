export const formatPrice = (totalPrice = 0) => {
  const price = totalPrice || 0;
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return formattedPrice;
};
