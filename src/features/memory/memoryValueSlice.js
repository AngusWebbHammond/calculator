import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';

export const memoryValueSlice = createSlice({
    name: 'memory',
    initialState: {
        currentValue: [],
    },
    reducers: {
        saveCurrentValue: (state, action) => {
            state.currentValue = [action.payload, ...state.currentValue];
        },
        changeCurrentValue: (state, action) => {
            state.currentValue = state.currentValue.map((item,index) => {
                if (index != action.payload[3]) {
                    return item
                }

                return [action.payload[0],(parseFloat(action.payload[1], 10) + parseFloat(action.payload[2])).toString()]
            })
        },
        clearCurrentValue: (state, action) => {
            state.currentValue = state.currentValue.filter(item => item[0] !== action.payload[0])
        },
    }
})

export const { saveCurrentValue, changeCurrentValue, clearCurrentValue } = memoryValueSlice.actions

export default memoryValueSlice.reducer