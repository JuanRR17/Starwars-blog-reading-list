import React from "react";

const favoritesContext = React.createContext(
    {
        favorites:[], add:()=>{}, delete: ()=>{}
    }
    )

export default favoritesContext;