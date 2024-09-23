import React from 'react';
import './calculator.css';
import Button from '../Button';
import Input from '../Input';
import MemoryButton from '../Memory-Buttons';

const Calculator = () => {
  return (
    <div className='calculator-container'>
        <div>
            {/* Input/Output */}
            <Input/>
        </div>
        <div>
            {/* Memory */}
            <MemoryButton type='MC' />
            <MemoryButton type='MR' />
            <MemoryButton type='M+' />
            <MemoryButton type='M-' />
            <MemoryButton type='MS' />
            <MemoryButton type='M^' />
        </div>
        <div className='calculator-button-row'>
            {/* Row 1 */}
            <Button type='%' buttonClickedFunc={() => alert('%')}/>
            <Button type='CE' buttonClickedFunc={() => alert('CE')}/>
            <Button type='C' buttonClickedFunc={() => alert('C')}/>
            <Button type='BSP' buttonClickedFunc={() => alert('BSP')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 2 */}
            <Button type='1/x' buttonClickedFunc={() => alert('1/x')}/>
            <Button type='x^2' buttonClickedFunc={() => alert('x^2')}/>
            <Button type='x^(1/2)' buttonClickedFunc={() => alert('x^(1/2)')}/>
            <Button type='/' buttonClickedFunc={() => alert('/')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 3 - Numbers Start Here */}
            <Button type='7' buttonClickedFunc={() => alert('7')}/>
            <Button type='8' buttonClickedFunc={() => alert('8')}/>
            <Button type='9' buttonClickedFunc={() => alert('9')}/>
            <Button type='X' buttonClickedFunc={() => alert('X')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 4 */}
            <Button type='4' buttonClickedFunc={() => alert('4')}/>
            <Button type='5' buttonClickedFunc={() => alert('5')}/>
            <Button type='6' buttonClickedFunc={() => alert('6')}/>
            <Button type='-' buttonClickedFunc={() => alert('-')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 5 */}
            <Button type='1' buttonClickedFunc={() => alert('1')}/>
            <Button type='2' buttonClickedFunc={() => alert('2')}/>
            <Button type='3' buttonClickedFunc={() => alert('3')}/>
            <Button type='+' buttonClickedFunc={() => alert('+')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 6 */}
            <Button type='+/-' buttonClickedFunc={() => alert('+/-')}/>
            <Button type='0' buttonClickedFunc={() => alert('0')}/>
            <Button type='.' buttonClickedFunc={() => alert('.')}/>
            <Button type='=' buttonClickedFunc={() => alert('=')}/>
        </div>
    </div>
  )
}

export default Calculator