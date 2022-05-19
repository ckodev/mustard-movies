import { createSlice } from "@reduxjs/toolkit";
import { appStorageName } from '../globals/Globals';

function getFavs(){
    let favsFromStorage = localStorage.getItem(appStorageName);
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
  }

const initialState = {
    items: getFavs()
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

const favSlice = createSlice({
    name: 'favs',
    initialState: initialState,
    reducers: {
        favourite: (state, action) => {
            console.log(state.items);
            const newFavs = [...state.items, action.payload];
            localStorage.setItem(appStorageName, JSON.stringify(newFavs));
            state.items = newFavs;
        },

        unFavourite: (state, action) => {
            const itemsCopy = state.items;
            const indexOfMovieToRemove = getIndex(action.payload, state.items);
            itemsCopy.splice(indexOfMovieToRemove, 1);
            localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.items = itemsCopy;
        }
    }
})


export const {favourite, unFavourite} = favSlice.actions;

export default favSlice.reducer