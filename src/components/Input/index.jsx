import React, { useState } from 'react'
import './input.css'

const Input = () => {
    const [returnValue, setReturnValue] = useState('0');

  return (
    <input placeholder={returnValue} className='input-box'/>
  )
}

export default Input