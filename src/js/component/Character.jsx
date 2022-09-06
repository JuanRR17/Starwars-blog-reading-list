import React from 'react'
import PropTypes from 'prop-types'
import {AiOutlineHeart} from 'react-icons/ai'


const Character = ({
    data
}) => {

    const style={
        "width":"400px"
    }

  return (
    <div className="card" style={style}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <div className="p-3 ps-0 card-text">
                <div>Gender: male</div>
                <div>Hair-Color: brown</div>
                <div>Eye-Color: blue</div>
            </div>
            <button type="button" className="btn btn-outline-primary">Learn More!</button>
            <button type="button" className="float-end btn btn-outline-warning"><AiOutlineHeart/></button>
        </div>
    </div> 
  )
}

Character.propTypes = {}

export default Character