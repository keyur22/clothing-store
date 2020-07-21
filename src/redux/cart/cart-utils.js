export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  console.log(isExists);

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

export const abc = () => console.log("reach");
