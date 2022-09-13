import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { useHistory } from 'react-router-dom';
import favouritesContext from "../store/favourites-context"
import images from '../store/images';

const ItemCard = ({ children, item }) => {
    const { favourites,actions } = useContext(favouritesContext)
    const history = useHistory()

    const itemLink = item.url.split('/').slice(-2).join("/")
    const link = `/${itemLink}`
    item.link = link
    item.image = images[itemLink]
    const style={
        "width":"400px"
    }
    const imageStyle = {
        "height": "200px",
        "objectFit": "cover"
    }

    const handleItemInFavourites = (elem) =>{
        if(!favourites.includes(elem)){
            actions.add(elem)
        }else{
            actions.delete(elem.uid)
        }
    }

  return (
    <div className="card card-block m-2" style={style}>
        <img src={item.image} className="card-img-top" alt={item.image} style={imageStyle}/>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div className="p-3 ps-0 card-text">
                {children}
            </div>
            <button type="button" onClick={() => history.push(link)} className="btn btn-outline-primary">Learn More!</button>
            
                <button type="button" onClick={() => handleItemInFavourites(item)} className="float-end btn btn-outline-warning">
                {
                    favourites.includes(item) 
                    ?
                    <AiFillHeart/>
                    :
                    <AiOutlineHeart/>
                }
                </button>
        </div>
    </div> 
    
  )
}

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
}

export default ItemCard