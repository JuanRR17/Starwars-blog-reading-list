import React, { useContext } from "react"
import favouritesContext from "../store/favourites-context"
import { Link } from "react-router-dom"

const Favourites = () =>{
    const {favourites, actions}=useContext(favouritesContext)

    return(
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favourites <span className="badge bg-secondary">{favourites.length}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {
                    favourites.map((fav)=>{
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

export default Favourites;

