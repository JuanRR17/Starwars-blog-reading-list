import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { makeRequest, urls } from '../utils'
import images from '../store/images'

const Item = () => {
  const [details, setDetails]=useState()
  let location = useLocation()

  const id = location.pathname.split('/').slice(-1)
  const cat = location.pathname.split('/').slice(-2,-1).toString()
  const imageLink = location.pathname.split('/').slice(-2).join("/")

  const fetchURL = () =>{
    switch (cat){
      case 'people':{
        return urls[0]+'/'+id;
      }
      case 'planets':{
        return urls[1]+'/'+id;
      }
      case 'vehicles':{
        return urls[2]+'/'+id;
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
          <img src={images[imageLink]} className="card-img-top" alt={images[imageLink]}/>
        </div>
        <div className='col-6'>
          <h2>{details.name} </h2>
          {displayProperties().map((prop,index)=>{
            return <div key={index}>{prop.name}: {prop.prop}</div>
          })}

        </div>
      </div>
      : "Loading Page"}
    </div>
  )
}


export default Item