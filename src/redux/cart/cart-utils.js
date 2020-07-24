export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (isExists) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.map((item) => {
    if (item.id === itemToRemove.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};
