import { configureStore } from '@reduxjs/toolkit'
import memoryValueReducer from '../features/memory/memoryValueSlice'


export default configureStore({
  reducer: {
    memoryValue: memoryValueReducer,
  },
})