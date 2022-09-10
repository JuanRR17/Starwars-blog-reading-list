import React from "react";

const favouritesContext = React.createContext(null)

export const initialState = {favourites:[]}

export function reducer(state, action){
    switch(action.type){
        case 'add':{
            const newFavourites = [...state.favourites,action.payload]
            return {favourites: newFavourites};
        }
        case 'delete': {
            const newFavourites =state.favourites.filter((fav)=>{
                return fav.uid !== action.payload
            })
            return {favourites: newFavourites};
        }
        default:
            throw new Error()
    }	
}

export default favouritesContext;
