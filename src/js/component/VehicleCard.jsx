import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {AiOutlineHeart} from 'react-icons/ai'
import { makeRequest } from "../utils.js";
import { useHistory } from 'react-router-dom';

const VehicleCard = ({
    item
}) => {
    const history = useHistory()
    const [details, setDetails]=useState()
    const style={
        "width":"400px"
    }

    useEffect(()=>{
        const getVehicleData = async () =>{
            const det = await makeRequest(item.url)
            setDetails(det.result.properties)
        }
        getVehicleData()
    },[])
  return (
    <div className="card" style={style}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div className="p-3 ps-0 card-text">
                <div>Name: {details ? details.name : null}</div>
                <div>Class: {details ? details.vehicle_class : null}</div>
                <div>Crew: {details ? details.crew : null}</div>
            </div>
            <button type="button" onClick={() => history.push(`/vehicle/${item.uid}`)} className="btn btn-outline-primary">Learn More!</button>
            <button type="button" className="float-end btn btn-outline-warning"><AiOutlineHeart/></button>
        </div>
    </div> 
    
  )
}

VehicleCard.propTypes = {}

export default VehicleCard