import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
       counter:{
        nrItems: 0,
        productId: null
       } 
    },
    reducers: {
        increment: (state) => {
           state.counter.nrItems[productId] = state.counter.nrItems + 1;
        },
        decrement: (state) => {
            state.nrItems = state.nrItems - 1;
    
         },
    }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;