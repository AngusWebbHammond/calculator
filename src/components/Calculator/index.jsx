import React, { useState } from 'react';
import './calculator.css';
import Button from '../Button';
import Input from '../Input';
import MemoryButton from '../Memory-Buttons';

const Calculator = () => {

    const [operationList, setOperationList] = useState('');
    const [currentCount, setCurrentCount] = useState('0');
    const [isNewValue, setIsNewValue] = useState(true);

    // Change current count
    // wait for button click
    // upon button click:
    //  - if number then push right to the value, if new value, then set the value to new
    //  - if operator then eval the prior operation, updating the total and the current number,
    //  - if backspace then remove right most in current number, this does not effect the total at all
    //  - if CE then clear most recent entry (current number)
    //  - if C then clear all the entries

    const modifyValue = (value) => {
        if (typeof value == 'number') {
            if (isNewValue) {
                setCurrentCount(value.toString());
                setIsNewValue(false);
                return;
            }
            else {
                const tempValue = currentCount + value.toString();
                setCurrentCount(tempValue);
                setIsNewValue(false);
                return;
            }
        }
        else if (value == 'BSP') {
            const tempValue = currentCount.slice(0, -1);
            setCurrentCount(tempValue);
            return;
        }
        else {
            console.log("No Correct value in modify value.")
            return;
        }
    }

    const modifyOperation = (operation) => {
        const operations = ['+','-','*','/'];
        if (operations.includes(operation)) {
            if (operations.includes(operationList.slice(-1))) {
                const tempOperationList = operationList.slice(0, -1) + operation;
                setOperationList(tempOperationList);
                return;
            }
            else{
                const evalValueTotal = eval(operationList + currentCount);
                const tempOperationList = evalValueTotal + operation;
                setCurrentCount(evalValueTotal.toString());
                setOperationList(tempOperationList);
                setIsNewValue(true);
                return;
            }
            
        }
        else if (operation == '=') {
            return;
        }
        else {
            return;
        }
    }

  return (
    <div className='calculator-container'>
        <div>
            {/* Input/Output */}
            <Input currentValue={currentCount} currentOperation={operationList}/>
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
            <Button type='/' buttonClickedFunc={() => modifyOperation('/')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 3 - Numbers Start Here */}
            <Button type='7' buttonClickedFunc={() => modifyValue(7)}/>
            <Button type='8' buttonClickedFunc={() => modifyValue(8)}/>
            <Button type='9' buttonClickedFunc={() => modifyValue(9)}/>
            <Button type='*' buttonClickedFunc={() => modifyOperation('*')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 4 */}
            <Button type='4' buttonClickedFunc={() => modifyValue(4)}/>
            <Button type='5' buttonClickedFunc={() => modifyValue(5)}/>
            <Button type='6' buttonClickedFunc={() => modifyValue(6)}/>
            <Button type='-' buttonClickedFunc={() => modifyOperation('-')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 5 */}
            <Button type='1' buttonClickedFunc={() => modifyValue(1)}/>
            <Button type='2' buttonClickedFunc={() => modifyValue(2)}/>
            <Button type='3' buttonClickedFunc={() => modifyValue(3)}/>
            <Button type='+' buttonClickedFunc={() => modifyOperation('+')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 6 */}
            <Button type='+/-' buttonClickedFunc={() => alert('+/-')}/>
            <Button type='0' buttonClickedFunc={() => modifyValue(0)}/>
            <Button type='.' buttonClickedFunc={() => alert('.')}/>
            <Button type='=' buttonClickedFunc={() => modifyOperation('=')}/>
        </div>
    </div>
  )
}

export default Calculator