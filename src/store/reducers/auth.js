import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser: undefined,
    isLoading: false,
    error: null
};

export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:3000/auth/regis", userData);
            return response.data.user;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.error);
        }
    }
);


export const login = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/auth/login",
                userData 
            );
            return response.data; 
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.error);
        }
    }
);


export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("accessToken") ?? "";
            const response = await axios.get("http://localhost:3000/user", {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            return response.data.user;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    localStorage.removeItem("accessToken");
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload.user; 
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getCurrentUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.isLoading = false;
                state.currentUser = null;
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.currentUser = null;
                state.error = null;
            });
    },
});

export default authSlice.reducer;
