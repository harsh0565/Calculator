import React from 'react'

const Footer = (props) => {
  return (
    <div className={`position-absolute bottom-0 text-${props.mode ==="Light" ? "dark" :"light"}`}>
      Created by Harsh Sengar ,  For best effect use our dark theme
    </div>
  )
}

export default Footer
