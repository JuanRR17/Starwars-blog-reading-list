import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard.jsx'
import PlanetCard from './PlanetCard.jsx';
import VehicleCard from './VehicleCard.jsx';
import PropTypes from 'prop-types'
import { urls, makeRequest } from "../utils.js";

const Category = ({
    category,
    id
}) => {
    const [categoryData, setCategoryData] = useState()
    const style1={
        "width":"100vw"
    }
    const style2={
        "width":"fit-content"
    }

    useEffect(( )=>{
        const getCategoryData = async () =>{
            const characters = await makeRequest(urls[id])
            const data = characters.results
            setCategoryData(data)
        }
        getCategoryData()
        },[])
        console.log("categoryData",categoryData)
  return (
    <div >
        <h1>{category}</h1>
        <div style={style1} className="overflow-auto">
            <div className='d-flex' style={style2}>
            {
                categoryData ?
                categoryData.map((item)=>{
                    switch (category){
                        case "Characters":{
                            return <CharacterCard 
                                key={item.uid} 
                                id={item.uid}
                                item={item}
                                url={item.url}                                
                                />
                            break
                        }
                         case "Planets":{
                            return <PlanetCard 
                            key={item.uid} 
                            item={item}
                            url={item.url}
                            />
                            break
                        }
                       case "Vehicles":{
                            return <VehicleCard 
                            key={item.uid} 
                            item={item}
                            url={item.url}
                            />
                            break
                        }
                    }
                })
                :
                null
            }
            </div>
        </div>
    </div>
  )
}

Category.propTypes = {}

export default Category