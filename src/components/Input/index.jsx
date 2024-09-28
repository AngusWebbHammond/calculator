import React, { useState } from 'react';
import './input.css';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <>
      <h3>{props.currentOperation.join('')}</h3>
      <input placeholder={0} className='input-box' value={props.currentValue} onChange={() => console.log("hi")}/>
    </>
  )
}

Input.propTypes = {
  currentOperation: PropTypes.array,
  currentValue: PropTypes.number,
}

export default Input