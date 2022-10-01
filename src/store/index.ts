import { configureStore } from '@reduxjs/toolkit'

import userReducer from './modules/user'
import expensesReducer from './modules/expenses'

const store = configureStore({
  reducer: {
    user: userReducer,
    expenses: expensesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store