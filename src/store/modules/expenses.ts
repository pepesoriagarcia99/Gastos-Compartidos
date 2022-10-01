import { createSlice } from "@reduxjs/toolkit";
import Expense from "../../interfaces/Expense.interface";

// import { uuid } from "../../utils/Tools";

export const expensesData = createSlice({
  name: "ExpensesData",
  initialState: [] as Array<Expense>,
  reducers: {
    addExpense: (state, expense) => {
      // state.push(expense.payload);
    },
    updateExpense: (state, expense) => {

    }
  },
});

export const { addExpense, updateExpense } = expensesData.actions;

export default expensesData.reducer;
