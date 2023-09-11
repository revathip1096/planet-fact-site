import React from 'react'
import Planet from './planet-info';
import data from '../../public/data'

const earth = () => {
  return (
    <Planet prop={data[2]}/>
  )
}

export default earth