import React, {useState, useEffect} from 'react'
import { makeRequest } from "../utils.js";
import PropTypes from 'prop-types'

const ItemCardDetails = ({ category, item }) => {
    
    const [details, setDetails] = useState()

    useEffect(()=>{
        const getCharData = async () =>{
            const det = await makeRequest(item.url)
            setDetails(det.result.properties)
        }
        getCharData()
    },[])

  switch(category){
        case "Characters":{
            return (<>
                    <div>Gender: {details ? details.gender : null}</div>
                    <div>Hair-Color: {details ? details.hair_color : null}</div>
                    <div>Eye-Color: {details ? details.eye_color : null}</div>
                </>)
                }
        case "Planets":{
            return (<>
                    <div>Population: {details ? details.population : null}</div>
                    <div>Terrain: {details ? details.terrain : null}</div>
                    </>)
                }
        case "Vehicles":{
            return (<>
                    <div>Name: {details ? details.name : null}</div>
                    <div>Class: {details ? details.vehicle_class : null}</div>
                    <div>Crew: {details ? details.crew : null}</div>
                </>)
                }
    }
  
}

ItemCardDetails.propTypes = {
    category: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
}

export default ItemCardDetails