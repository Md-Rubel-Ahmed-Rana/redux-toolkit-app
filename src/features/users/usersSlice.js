import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersFetcher = createAsyncThunk("/users/usersFetcher" ,async() => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data
})

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        users: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(usersFetcher.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(usersFetcher.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = null
        })
        builder.addCase(usersFetcher.rejected, (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default usersSlice.reducer