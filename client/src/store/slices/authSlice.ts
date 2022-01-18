import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';

interface IAuthState {
    isAuth: boolean;
    user: null | {};
    isLoading: boolean;
    errors: any;
}

const initialState: IAuthState = {
    isAuth: false,
    user: null,
    isLoading: false,
    errors: null,
}

export const register = createAsyncThunk(
    'auth/register',
    async (data: { login: string, password: string }, {rejectWithValue}) => {
        try {
            const response = await api.registerUser(data)        
            return {
                data: response.data,            
            }
        } catch (error: any) {
            
            if (!error.isAxiosError) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
        
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {        
        builder
            .addCase(register.fulfilled, (state, action) => {
                console.log("ddd"); 
            })
            .addCase(register.rejected, (state, action) => {
                console.log(action.payload); 
            })
    }
})

export default authSlice.reducer