import { configureStore } from "@reduxjs/toolkit";
import favsReducer from '../features/favSlice'


export const store = configureStore({
    reducer: {
        favs: favsReducer, 
    }
})