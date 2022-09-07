import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Character = props => {
  let location = useLocation()
  const id = location.pathname.split('/')[-1]
  console.log("id:", id)
  return (
    <div>character</div>
  )
}

Character.propTypes = {}

export default Character