import React from 'react'
import './memory-buttons.css';

const MemoryButton = (props) => {
  return (
    <button className='button'>{props.type}</button>
  )
}

export default MemoryButton