export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  console.log('exist',existingCartItem);
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

export const reduceItemQty=(cartItems,itemToReduce)=>{
  const existingCart=cartItems.find(cartItem=>cartItem.id===itemToReduce.id);
  if (existingCart.quantity===1){
return cartItems.filter(cartItem=>cartItem.id!==itemToReduce.id)
  }
  else{
    return cartItems.map(cartItem=>cartItem.id===itemToReduce.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem)
  }
}
 