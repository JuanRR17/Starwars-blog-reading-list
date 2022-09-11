import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard.jsx'
import PlanetCard from './PlanetCard.jsx';
import VehicleCard from './VehicleCard.jsx';
import PropTypes from 'prop-types'
import { urls, makeRequest } from "../utils.js";
import ItemCardDetails from './ItemCardDetails.jsx';

const Category = ({
    category,
    id
}) => {
    const [categoryData, setCategoryData] = useState()

    useEffect(( )=>{
        const getCategoryData = async () =>{
            const characters = await makeRequest(urls[id])
            const data = characters.results
            setCategoryData(data)
        }
        getCategoryData()
        },[])
  return (
    <div >
        <h1>{category}</h1>
        <div 
        className="d-flex overflow-auto">
            <div className='d-flex flex-row flex-nowrap'>
            {
                categoryData ?
                categoryData.map((item)=>{
                    switch (category){
                        case "Characters":{
                            return <CharacterCard 
                                key={item.uid} 
                                item={item}
                                >
                                {/* <ItemCardDetails
                                    category={category}
                                /> */}
                                </CharacterCard>
                            break
                        }
                         case "Planets":{
                            return <PlanetCard 
                            key={item.uid}
                            item={item}
                            />
                            break
                        }
                       case "Vehicles":{
                            return <VehicleCard 
                            key={item.uid} 
                            item={item}
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

Category.propTypes = {
    category: PropTypes.string,
    id: PropTypes.number
}

export default Category