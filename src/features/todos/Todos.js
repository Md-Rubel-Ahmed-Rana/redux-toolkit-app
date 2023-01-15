import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './TodosSlice';

const Todos = () => {
    const [todo, setTodo] = useState("")
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <div className='todos'>
            <h3>All Todos</h3>
                <label htmlFor="todo">Todo</label>
            <input onBlur={(e) => setTodo(e.target.value)} type="text" name="todo" id="todo" />
            <button onClick={() => {dispatch(addTodo(todo))}}>Add Todo</button>

            <ul>
                {
                    todos.map((todo, index) => <li key={index}> {index+1}.{todo}</li>)
                }
            </ul>
        </div>
    );
};

export default Todos;