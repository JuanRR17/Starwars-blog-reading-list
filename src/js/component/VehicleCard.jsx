import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {AiOutlineHeart} from 'react-icons/ai'
import { makeRequest } from "../utils.js";


const VehicleCard = ({
    item,
    url
}) => {

    const [details, setDetails]=useState()
    const style={
        "width":"400px"
    }

    useEffect(()=>{
        const getVehicleData = async () =>{
            const det = await makeRequest(url)
            setDetails(det.result.properties)
        }
        getVehicleData()
    },[])
// console.log("details",details)
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
            <button type="button" className="btn btn-outline-primary">Learn More!</button>
            <button type="button" className="float-end btn btn-outline-warning"><AiOutlineHeart/></button>
        </div>
    </div> 
    
  )
}

VehicleCard.propTypes = {}

export default VehicleCard