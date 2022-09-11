import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard.jsx'
import PropTypes from 'prop-types'
import { urls, makeRequest } from "../utils.js";
import ItemCardDetails from './ItemCardDetails.jsx';
// import { categories } from '../store/favourites-context.js';

const Category = ({category,id}) => {
    
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
                    return <ItemCard key={item.uid} item={item}>
                            <ItemCardDetails key={item.uid} category={category} item={item} />
                        </ItemCard>   
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
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Category