import React from 'react'
import Character from './Character.jsx'
import PropTypes from 'prop-types'

const Category = ({
    category
}) => {

    const style1={
        "width":"100vw"
    }
    const style2={
        "width":"fit-content"
    }
  return (
    <div >
        <h1>{category.name}</h1>
        <div style={style1} className="overflow-auto">
            <div className='d-flex' style={style2}>
            {
                category.data.map((item)=>{
                    switch (category.name){
                        case "Characters":{
                            return <Character key={item.uid} data={item}/>
                            break
                        }
                        {/* case "Planets":{
                            return <Planet key={item.uid} data={item}/>
                            break
                        }
                        case "Vehicles":{
                            return <Vehicle key={item.uid} data={item}/>
                            break
                        } */}
                    }
                })
                
            }
            </div>
        </div>
    </div>
  )
}

Category.propTypes = {}

export default Category