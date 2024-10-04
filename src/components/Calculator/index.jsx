import React, { useState } from 'react';
import './calculator.css';
import Button from '../Button';
import Input from '../Input';
import MemoryButton from '../Memory-Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentValue, saveCurrentValue, clearCurrentValue } from '../../features/memory/memoryValueSlice';

const Calculator = () => {

    const savedValue = useSelector((state) => state.memoryValue.currentValue);
    const dispatch = useDispatch();

    const [operationList, setOperationList] = useState('');
    const [currentCount, setCurrentCount] = useState('0');
    const [isNewValue, setIsNewValue] = useState(true);
    const [isEquals, setIsEquals] = useState(false);

    // Change current count
    // wait for button click
    // upon button click:
    //  - if number then push right to the value, if new value, then set the value to new
    //  - if operator then eval the prior operation, updating the total and the current number,
    //  - if backspace then remove right most in current number, this does not effect the total at all
    //  - if CE then clear most recent entry (current number)
    //  - if C then clear all the entries

    const modifyValue = (value) => {
        if (typeof value == 'number' || value == '.') {
            if (isNewValue) {
                if (isEquals) {
                    setOperationList('');
                    setIsEquals(false);
                }
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
        else if (value == 'BSP' && !isNewValue) {
            const tempValue = currentCount.slice(0, -1);
            setCurrentCount(tempValue);
            return;
        }
        else if (value == 'CE') {
            if (isEquals) {
                setCurrentCount('0');
                setOperationList('');
                setIsNewValue(true);
                setIsEquals(false);
                return;
            }
            setCurrentCount('0');
            setIsNewValue(true);
            return;
        }
        else if (value == 'C') {
            setCurrentCount('0');
            setOperationList('');
            setIsNewValue(true);
            setIsEquals(false);
        }
        else if (value == '+/-') {
            if (currentCount == '0') {
                return;
            }
            else if (currentCount.slice(0,1) == '-') {
                const tempCount = currentCount.slice(1);
                setCurrentCount(tempCount);
                return;
            }
            else {
                const tempCount = '-' + currentCount;
                setCurrentCount(tempCount);
                return;
            }
        }
        else if (value == 'sqr') {
            if (currentCount == '0') {
                return;
            }
            
            const tempCount = currentCount**(1/2);
            setCurrentCount(tempCount.toString());
            return;
        }
        else if (value == '^2') {
            if (currentCount == '0') {
                return;
            }

            const tempCount = currentCount**2;
            setCurrentCount(tempCount.toString());
            return;
        }
        else if (value == 'resp') {
            if (currentCount == '0') {
                return;
            }

            const tempCount = 1/currentCount;
            setCurrentCount(tempCount.toString());
            return;
        }
        else if (value == '%') {
            // TODO: Complete this implimetation
            return;
        }
        else {
            console.log("No Correct value in modify value.");
            return;
        }
    }

    const modifyOperation = (operation) => {
        const operations = ['+','-','*','/'];
        if (operations.includes(operation)) {
            if (isEquals) {
                setOperationList(currentCount + operation);
                setIsEquals(false);
                setIsNewValue(true);
            }
            else if (operations.includes(operationList.slice(-1)) && isNewValue) {
                
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
            if (operations.includes(operationList.slice(-1))) {
                if (currentCount == '0') {
                    const tempOperationList = operationList.slice(0, -1) + operation;
                    setOperationList(tempOperationList);
                    setIsNewValue(true);
                    setIsEquals(true);
                    return;
                }
                const tempOperationList = operationList + currentCount + operation;
                const evalValueTotal = eval(operationList + currentCount);
                setOperationList(tempOperationList);
                setCurrentCount(evalValueTotal.toString());
                setIsNewValue(true);
                setIsEquals(true);
                return;
            }

            const tempOperationList = currentCount + operation;
            setOperationList(tempOperationList);
            setIsNewValue(true);
            setIsEquals(true);
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
            <MemoryButton type='MC' onclick={() => dispatch(clearCurrentValue())}/>
            <MemoryButton type='MR' onclick={() => setCurrentCount(savedValue)}/>
            <MemoryButton type='M+' onclick={() => dispatch(changeCurrentValue('1'))}/>
            <MemoryButton type='M-' onclick={() => dispatch(changeCurrentValue('-1'))}/>
            <MemoryButton type='MS' onclick={() => dispatch(saveCurrentValue(currentCount))}/>
            {/* <MemoryButton type='M^' /> */}
        </div>
        <div className='calculator-button-row'>
            {/* Row 1 */}
            <Button type='%' buttonClickedFunc={() => alert('%')}/>
            <Button type='CE' buttonClickedFunc={() => modifyValue('CE')}/>
            <Button type='C' buttonClickedFunc={() => modifyValue('C')}/>
            <Button type='BSP' buttonClickedFunc={() => modifyValue('BSP')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 2 */}
            <Button type='1/x' buttonClickedFunc={() => modifyValue('resp')}/>
            <Button type='x^2' buttonClickedFunc={() => modifyValue('^2')}/>
            <Button type='x^(1/2)' buttonClickedFunc={() => modifyValue('sqr')}/>
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
            <Button type='+/-' buttonClickedFunc={() => modifyValue('+/-')}/>
            <Button type='0' buttonClickedFunc={() => modifyValue(0)}/>
            <Button type='.' buttonClickedFunc={() => modifyValue('.')}/>
            <Button type='=' buttonClickedFunc={() => modifyOperation('=')}/>
        </div>
    </div>
  )
}

export default Calculator