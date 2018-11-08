export const addToCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj,
});

export const removeAllCart = isDelete => ({
  type: 'REMOVE_ALL_CART',
  payload: isDelete,
});

export const removeFromCart = uuId => ({
  type: 'REMOVE_FROM_CART',
  payload: uuId
});
