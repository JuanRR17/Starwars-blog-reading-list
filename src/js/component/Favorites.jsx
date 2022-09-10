import React, { useContext } from "react"
import favoritesContext from "../favorites-context"
import { Link } from "react-router-dom"

const Favorites = () =>{
    const favs = useContext(favoritesContext)
    console.log("favs:",favs)
    return(
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span className="badge bg-secondary">{favs.favorites.length}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {
                    favs.favorites.map((fav)=>{
                        return <li key={fav.uid}>
                            <Link to={fav.link} className="dropdown-item">
                            {fav.name}
                            </Link>
                            <button onClick={() => favs.delete(fav.uid)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Favorites;

