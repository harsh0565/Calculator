import React from 'react'
import '../App.css'
const Heading = (props) => {
  return (
    <div className={`text-center mt-2 ${props.mode=="Light"?"lighttheme" :"darktheme" } `}>
      <h1 className='heading'>{props.title}</h1>
    </div>
  )
}

export default Heading
