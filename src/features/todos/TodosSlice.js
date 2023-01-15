import { createSlice } from "@reduxjs/toolkit";

export const TodosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return state = [...state, action.payload]
        }
    }
})


export const {addTodo} = TodosSlice.actions

export default TodosSlice.reducer