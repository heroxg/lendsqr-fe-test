import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

//   interface usersState {
//     data: [],
//     isSuccess: boolean,
//     isFailure: boolean,
//     message: string,
//     loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }

export const getUserData = createAsyncThunk("users/getUsersData", async (arg, {
    rejectWithValue}) => {
    try{
        const {data} = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        return data;
    }catch(error){
        rejectWithValue(error.response.data)
    }
})

const initialState = {
    data: [],
    isSuccess: false,
    isFailure: false,
    message: "",
    loading: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUserData.pending]: (state, action) => {
            state.loading = true;
        },
        [getUserData.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true
        },
        [getUserData.rejected]: (state, {payload}) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "failed";
        }
    }
})

export default usersSlice;