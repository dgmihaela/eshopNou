import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'productsCrud',
    initialState: {
        value: []
    },
    reducers: {
        getProducts: (state, action) => {
           state.value[action.payload.id] = action.payload.products;
        },
        addProducts: (state, action) => {
            state.value[action.payload.id] = action.payload.product;
        },
        updateProducts: (state, action) => {
            state.value[action.payload.id] = action.payload;
        }
    }
});

export const {getProducts, addProducts, updateProducts} = productsSlice.actions;

export const selectProducts = state => state.productsSlice.value;

export default productsSlice.reducer;