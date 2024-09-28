import React, { useState } from 'react';
import './calculator.css';
import Button from '../Button';
import Input from '../Input';
import MemoryButton from '../Memory-Buttons';

const Calculator = () => {

    const [operationList, setOperationList] = useState([]);
    const [currentCount, setCurrentCount] = useState(0);

    const modifyCount = (value) => {

        if (typeof value === 'number') {
            if (currentCount == 0) {
                setCurrentCount(value);
                return;
            }

            setCurrentCount(value + currentCount*10);
            return;
        }
        else {
            if (value == '+') {
                if (currentCount == 0) {
                    const tempArray = operationList;
                    tempArray.push('+');
                    setOperationList(tempArray);
                    return;
                }
                else {
                    const count = currentCount.toLocaleString();
                    const tempArray = operationList;
                    tempArray.push(count, '+');
                    setOperationList(tempArray);
                    setCurrentCount(0);
                    return;
                }
                
            }
            else if (value == '-') {
                if (currentCount == 0) {
                    const tempArray = operationList;
                    tempArray.push('-');
                    setOperationList(tempArray);
                    return;
                }
                const count = currentCount.toLocaleString();
                const tempArray = operationList;
                tempArray.push(count, '-');
                setOperationList(tempArray);
                setCurrentCount(0);
                return;
            }

            else if (value == 'X') {
                if (currentCount == 0) {
                    const tempArray = operationList;
                    tempArray.push('*');
                    setOperationList(tempArray);
                    return;
                }
                const count = currentCount.toLocaleString();
                const tempArray = operationList;
                tempArray.push(count, '*');
                setOperationList(tempArray);
                setCurrentCount(0);
                return;
            }

            else if (value == '/') {
                if (currentCount == 0) {
                    const tempArray = operationList;
                    tempArray.push('/');
                    setOperationList(tempArray);
                    return;
                }
                const count = currentCount.toLocaleString();
                const tempArray = operationList;
                tempArray.push(count, '/');
                setOperationList(tempArray);
                setCurrentCount(0);
                return;
            }

            else if (value == '=') {
                const tempArray = operationList;
                tempArray.push(currentCount);
                const evaluateCount = eval(tempArray.join(''));
                setCurrentCount(0);
                setOperationList([evaluateCount]);
                return;
            }
            else if (value == 'C') {
                setCurrentCount(0);
                return;
            }
            else if (value == 'CE') {
                setCurrentCount(0);
                setOperationList([]);
                return;
            }

            else if (value == '.') {
                return;
            }

            else if (value == 'BSP') {
                setCurrentCount(Math.floor(currentCount/10));
                return;
            }

            else {
                return;
            }
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
            <Button type='CE' buttonClickedFunc={() => modifyCount('CE')}/>
            <Button type='C' buttonClickedFunc={() => modifyCount('C')}/>
            <Button type='BSP' buttonClickedFunc={() => modifyCount('BSP')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 2 */}
            <Button type='1/x' buttonClickedFunc={() => alert('1/x')}/>
            <Button type='x^2' buttonClickedFunc={() => alert('x^2')}/>
            <Button type='x^(1/2)' buttonClickedFunc={() => alert('x^(1/2)')}/>
            <Button type='/' buttonClickedFunc={() => modifyCount('/')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 3 - Numbers Start Here */}
            <Button type='7' buttonClickedFunc={() => modifyCount(7)}/>
            <Button type='8' buttonClickedFunc={() => modifyCount(8)}/>
            <Button type='9' buttonClickedFunc={() => modifyCount(9)}/>
            <Button type='X' buttonClickedFunc={() => modifyCount('X')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 4 */}
            <Button type='4' buttonClickedFunc={() => modifyCount(4)}/>
            <Button type='5' buttonClickedFunc={() => modifyCount(5)}/>
            <Button type='6' buttonClickedFunc={() => modifyCount(6)}/>
            <Button type='-' buttonClickedFunc={() => modifyCount('-')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 5 */}
            <Button type='1' buttonClickedFunc={() => modifyCount(1)}/>
            <Button type='2' buttonClickedFunc={() => modifyCount(2)}/>
            <Button type='3' buttonClickedFunc={() => modifyCount(3)}/>
            <Button type='+' buttonClickedFunc={() => modifyCount('+')}/>
        </div>
        <div className='calculator-button-row'>
            {/* Row 6 */}
            <Button type='+/-' buttonClickedFunc={() => alert('+/-')}/>
            <Button type='0' buttonClickedFunc={() => modifyCount(0)}/>
            <Button type='.' buttonClickedFunc={() => modifyCount('.')}/>
            <Button type='=' buttonClickedFunc={() => modifyCount('=')}/>
        </div>
    </div>
  )
}

export default Calculator