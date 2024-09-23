import React from 'react'
import './button.css';

const Button = (props) => {
  return (
    <button onClick={props.buttonClickedFunc} className='calculator-button'>{props.type}</button>
  )
}

export default Button