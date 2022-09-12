import React, { useContext } from "react"
import favouritesContext from "../store/favourites-context"
import { Link } from "react-router-dom"
import { MdDelete } from 'react-icons/md';

const Favourites = () =>{
    const {favourites, actions}=useContext(favouritesContext)
    const ulStyle={
        width: "max-content"
    }
    
    return(
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                Favourites <span className="badge bg-secondary">{favourites.length}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink" style={ulStyle}>
                {
                    favourites.length > 0
                    ?
                    favourites.map((fav)=>{
                        return <li key={fav.uid} className="dropdown-item">
                            <Link to={fav.link} >{fav.name}</Link>
                            <span className="float-end ms-2" type="button" onClick={() => actions.delete(fav.uid)}><MdDelete/></span>
                        </li>
                    })
                    :
                    <li className="text-center">(empty)</li>
                }
            </ul>
        </div>
    )
}

export default Favourites;

