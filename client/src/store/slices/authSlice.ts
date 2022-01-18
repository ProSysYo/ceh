import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { openNotification } from '../../commons/notification';

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
            
            openNotification("success", "Пользователь создан")

            return {
                data: response.data,            
            }
        } catch (error: any) {
            
            if (!error.isAxiosError) {
                throw error
            }

            openNotification("error", error.response.data.message)
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
                console.log("success"); 
            })
            .addCase(register.rejected, (state, action) => {
                console.log("reject"); 
            })
    }
})

export default authSlice.reducer