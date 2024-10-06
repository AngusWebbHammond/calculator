import React from 'react'
import './memory-buttons.css';

const MemoryButton = (props) => {
  return (
    <button className='button' onClick={props.onclick} disabled={props.disabled}>{props.type}</button>
  )
}

export default MemoryButton