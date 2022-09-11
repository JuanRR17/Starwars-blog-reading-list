import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { makeRequest, urls } from '../utils'

const Item = props => {
  const [details, setDetails]=useState()

  let location = useLocation()
  const id = location.pathname.split('/').slice(-1)
  const cat = location.pathname.split('/').slice(-2,-1).toString()
  console.log("cat:",cat)

  const fetchURL = () =>{
    switch (cat){
      case 'character':{
        return urls[0]+'/'+id;
        break
      }
      case 'planet':{
        return urls[1]+'/'+id;
        break
      }
      case 'vehicle':{
        return urls[2]+'/'+id;
        break
      }
    }
  }

  useEffect(()=>{
    const getItemData = async () =>{
        const det = await makeRequest(fetchURL())
        setDetails(det.result.properties)
    }
    getItemData()
},[])

  function displayProperties(){
    let properties=[];
    for(let prop in details){
      properties.push({"name":prop, "prop": details[prop]})
    }
    return properties
  }

  return (
    <div className='container'>
    {details ? 
      <div className='row'>
        <div className='col-6'>
          <img src="..." className="card-img-top" alt="..."/>
        </div>
        <div className='col-6'>
          <h2>{details.name} </h2>
          {displayProperties().map((prop,index)=>{
            return <div key={index}>{prop.name}: {prop.prop}</div>
          })}

        </div>
      </div>
      : null}
    </div>
  )
}

Item.propTypes = {}

export default Item