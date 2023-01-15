import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import todosReducer from "../features/todos/TodosSlice";
import usersReduder from "../features/users/usersSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
        users: usersReduder
    }
})

export default store