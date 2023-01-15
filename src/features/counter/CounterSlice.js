const { createSlice } = require("@reduxjs/toolkit");

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state = state + 1
        },
        decrement: (state) => {
             return state = state - 1
        },
        reset: (state) => {
            return state = 0
        },
        incrementByfive: (state, action) => {
            return state = state + action.payload
        }
    }
})


export const { increment, decrement, reset, incrementByfive } = counterSlice.actions

export default counterSlice.reducer;