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

  const propertiesArray = () =>{
    switch(cat){
      case 'people':{
        return ["name", "height", "birth_year", "skin_color", "eye_color", "gender" ]
      }
      case 'planets':{
        return ["name", "climate", "population", "orbital_period", "diameter", "rotation_period"]
      }
      case 'vehicles':{
        return ["model", "vehicle_class", "name", "length", "crew", "cargo_capacity"]
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
      if(propertiesArray().includes(prop))
      properties.push({"name":prop.split("_").join(" "), "prop": details[prop]})
    }
    return properties
  }

  const imageStyle = {
    // width:"800px",
    // height:"600px",
    objectFit: "cover"
  }

  return (
    <div className='container'>
    {details ? 
      <div className='row'>
        <div className='col-12 col-xl-8'>
          <img style={imageStyle} src={images[imageLink]} className="card-img-top" alt={images[imageLink]}/>
        </div>
        <div className='col-12 col-xl-4'>
          <h2>{details.name} </h2>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet, turpis id luctus mattis, nunc ligula posuere lorem, auctor convallis tellus nunc vitae sem. Aenean dapibus lorem vitae lacus faucibus, euismod egestas purus pretium. Sed mattis est in pharetra convallis. Cras mollis nec nibh in auctor. Nullam interdum nibh non commodo laoreet. Donec auctor, libero ac faucibus egestas, tellus sapien maximus sem, a imperdiet arcu sem ut arcu. Donec iaculis egestas quam sed interdum. Etiam quis tincidunt urna.
          </div>
        </div>
      </div>
      : <div>Loading Page</div>}
      {details ?
      <div className='row border-top border-danger border-2 mt-4'>
        {displayProperties().reverse().map((prop,index)=>{
            return <div className={`text-danger text-center text-capitalize col p-2 ${index === 0 ? "" : "border-start border-danger border-2" }`} 
                    key={index}>
                    <div>{prop.name}:</div> 
                    <div>{prop.prop}</div>
                  </div>
          })}
          </div>
          :
          <div>Loading details</div>
        }
    </div>
  )
}


export default Item