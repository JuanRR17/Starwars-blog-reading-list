import React from "react";
// import { makeRequest } from "../utils.js";

//  export const categories =[
//     {
//         name: "Characters",
//         url: 'https://www.swapi.tech/api/people',
//         data: []
//     }, 
//     {
//         name:"Planets",
//         url: 'https://www.swapi.tech/api/planets',
//         data: []

//     }, 
//     {
//         name:"Vehicles",
//         url:'https://www.swapi.tech/api/vehicles',
//         data: []

//     }]

const favouritesContext = React.createContext(null)

export const initialState = {favourites:[]}

// const getData = async( )=>{

//     const getCategoryData = async (category) =>{
//         const characters = await makeRequest(category.url)
//         const data = characters.results
//         console.log("data",data)
//         category.data = data
//     }
//     categories.map(async(category)=>{
//         await getCategoryData(category)
//     })
// }

// getData()


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
