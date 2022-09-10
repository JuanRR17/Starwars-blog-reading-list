import React, { useEffect, useState, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import {AiOutlineHeart} from 'react-icons/ai'
import { makeRequest } from "../utils.js";
import { useHistory } from 'react-router-dom';
import favouritesContext from "../favourites-context"

const CharacterCard = ({
    item
}) => {
    // const favs = useContext(favouritesContext)
    const {actions}=useContext(favouritesContext)

    const history = useHistory()
    const [details, setDetails]=useState()
    const link = `/character/${item.uid}`
    item.link = link

    const style={
        "width":"400px"
    }

    useEffect(()=>{
        const getCharData = async () =>{
            const det = await makeRequest(item.url)
            setDetails(det.result.properties)
        }
        getCharData()
    },[])
    //console.log("item:", item) //{uid: , name: , url:}
  return (
    <div className="card card-block" style={style}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div className="p-3 ps-0 card-text">
                <div>Gender: {details ? details.gender : null}</div>
                <div>Hair-Color: {details ? details.hair_color : null}</div>
                <div>Eye-Color: {details ? details.eye_color : null}</div>
            </div>
            <button type="button" onClick={() => history.push(link)} className="btn btn-outline-primary">Learn More!</button>
            <button type="button" onClick={() => actions.add(item)} className="float-end btn btn-outline-warning"><AiOutlineHeart/></button>
        </div>
    </div> 
    
  )
}

CharacterCard.propTypes = {}

export default CharacterCard