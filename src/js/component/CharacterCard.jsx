import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {AiOutlineHeart} from 'react-icons/ai'
import { makeRequest } from "../utils.js";
import { useHistory } from 'react-router-dom';


const CharacterCard = ({
    item,
    id,
    url
}) => {
    const history = useHistory()
    const [details, setDetails]=useState()
    const style={
        "width":"400px"
    }

    useEffect(()=>{
        const getCharData = async () =>{
            const det = await makeRequest(url)
            setDetails(det.result.properties)
        }
        getCharData()
    },[])

  return (
    <div className="card" style={style}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div className="p-3 ps-0 card-text">
                <div>Gender: {details ? details.gender : null}</div>
                <div>Hair-Color: {details ? details.hair_color : null}</div>
                <div>Eye-Color: {details ? details.eye_color : null}</div>
            </div>
            <button type="button" onClick={() => history.push(`/character/${id}`)} className="btn btn-outline-primary">Learn More!</button>
            <button type="button" className="float-end btn btn-outline-warning"><AiOutlineHeart/></button>
        </div>
    </div> 
    
  )
}

CharacterCard.propTypes = {}

export default CharacterCard