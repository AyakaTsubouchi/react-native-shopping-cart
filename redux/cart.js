import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    setCart(state, action) {
        if (state.cart.find((item) => item.id ===action.payload.id)) {
            state.cart.map((item) => {
              if (item.id === action.payload.id) {
                item.quantity += 1;
                             }
            });
          } else {
              state.cart = [...state.cart,{ ...action.payload, quantity: 1 }]
          }
    },
    
    deleteCart(state,action){
        for (let i = 0; i < state.cart.length; i++) {
          if (action.payload.id === state.cart[i].id) {
            state.cart.splice(i, 1);
          }
        }
      },
      
      incrementQuantity(state,action){
        for (let i = 0; i < state.cart.length; i++) {
          if (action.payload.id === state.cart[i].id) {
            state.cart[i].quantity++;
          }
        }
      },
      decrementQuantity(state,action){
        for (let i = 0; i < state.cart.length; i++) {
          if (action.payload.id === state.cart[i].id) {
            if (state.cart[i].quantity < 2) {
              state.cart.splice(i, 1);
            } else {
              state.cart[i].quantity--;
            }
          }
        }
      },
  }
})

export const { setCart, deleteCart,incrementQuantity,decrementQuantity } = cartSlice.actions
export default cartSlice.reducer