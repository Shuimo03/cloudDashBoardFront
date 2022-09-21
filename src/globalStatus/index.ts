import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '@/globalStatus/counter'
export default configureStore({
  reducer: {
    counter:counterSlice
  }
})