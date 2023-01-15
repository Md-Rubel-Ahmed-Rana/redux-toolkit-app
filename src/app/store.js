import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import todosReducer from "../features/todos/TodosSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    }
})

export default store