import React from 'react'
import "../../Styles/Pranav/buttonstyle.css"

const Button = ({value}) => {
  return (
    <span>
        <button className="btn">{value}</button>
    </span>
  )
}

export default Button