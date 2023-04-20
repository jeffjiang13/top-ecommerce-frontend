import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToAdd.id &&
      cartItem.selectedSizeProp &&
      cartItemToAdd.selectedSizeProp &&
      cartItem.selectedSizeProp.size === cartItemToAdd.selectedSizeProp.size
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id &&
      cartItem.selectedSizeProp.size === cartItemToAdd.selectedSizeProp.size
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }


  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      quantity: 1,
      selectedSizeProp: cartItemToAdd.selectedSizeProp || {},
    },
  ];
};


export const basketSlice = createSlice({
  name: "basket",
  initialState,
  hydrate: (state, action) => {
    // do not do state = action.payload it will not update the store
    return action.payload;
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = addItemToCart(state.items, action.payload);
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.selectedSizeProp.size !== action.payload.selectedSizeProp.size
      );
    },
    plusItem: (state, action) => {
      [...state.items, (state.items[action.payload].quantity += 1)];
    },
    minusItem: (state, action) => {
      [...state.items, (state.items[action.payload].quantity -= 1)];
    },
    deleteFromBasket: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  plusItem,
  minusItem,
  deleteFromBasket,
} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
