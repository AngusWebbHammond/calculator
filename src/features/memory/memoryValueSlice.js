import { createSlice } from '@reduxjs/toolkit'

export const memoryValueSlice = createSlice({
    name: 'memory',
    initialState: {
        currentValue: '',
    },
    reducers: {
        saveCurrentValue: (state, action) => {
            state.currentValue = action.payload
        },
        changeCurrentValue: (state, action) => {
            state.currentValue = (parseFloat(state.currentValue, 10) + parseFloat(action.payload)).toString()
        },
        clearCurrentValue: (state) => {
            state.currentValue = ''
        },
    }
})

export const { saveCurrentValue, changeCurrentValue, clearCurrentValue } = memoryValueSlice.actions

export default memoryValueSlice.reducer