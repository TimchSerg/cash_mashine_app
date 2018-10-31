export const addToCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj,
});

export const removeAllCart = isDelete => ({
  type: 'REMOVE_ALL_CART',
  payload: isDelete,
});
