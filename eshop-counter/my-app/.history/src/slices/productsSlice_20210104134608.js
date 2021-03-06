import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'productsCrud',
    initialState: {
        value: {

        }
    },
    reducers: {
        getProducts: (state, action) => {
           state.value[action.payload.id] = action.payload.products;
        },
        addProducts: (state, action) => {
            state.value[action.payload.id] = action.payload.product;
        },
        updateQuantity: (state, action) => {
            //state.value[action.payload.id] = action.payload;
            console.log(action.payload.quantity)
            //state.value[action.payload.productId] = action.payload.quantity;
        }
    }
});

export const {getProducts, addProducts, updateQuantity} = productsSlice.actions;

export const selectProducts = state => state.productsSlice.value;

export default productsSlice.reducer;