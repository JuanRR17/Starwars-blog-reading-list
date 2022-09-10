import React, { useContext } from "react"
import favoritesContext from "../favorites-context"
import { Link } from "react-router-dom"

const Favorites = () =>{
    // const favs = useContext(favoritesContext)
    const {store, actions}=useContext(favoritesContext)


    return(
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span className="badge bg-secondary">{store.length}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {
                    store.map((fav)=>{
                        return <li key={fav.uid}>
                            <Link to={fav.link} className="dropdown-item">
                            {fav.name}
                            </Link>
                            <button onClick={() => actions.delete(fav.uid)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Favorites;

