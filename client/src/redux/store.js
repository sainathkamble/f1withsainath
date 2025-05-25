import { configureStore } from '@reduxjs/toolkit';
import grandPrixReducer from "./grandPrixSlice.js";
import sessionReducer from "./sessionSlice.js";

export const store = configureStore({
   
    reducer: {
       grandPrix : grandPrixReducer,
       session : sessionReducer,
    },
});