import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByfive, reset } from './CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Redux Toolkit</h2>
            <h3>Counter App</h3>
                <p>Count: {count}</p>
            <div className='wrapper'>
                <button onClick={() => { dispatch(increment()) }}>Increment</button>
                <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() =>{dispatch(reset())}}>Reset</button>
            <button onClick={() =>{dispatch(incrementByfive(5))}}>Increment By five</button>
            </div>
        </div>
    );
};

export default Counter;