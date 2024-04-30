import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

export const UserLogin=createAsyncThunk('/login',async(data,{rejectWithValue})=>{
    try {
        const res=await axios.post("https://backend-f3.onrender.com/api/login",data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

export const UserRegister=createAsyncThunk('/register',async(data,{rejectWithValue})=>{
    try {
        const res=await axios.post("https://backend-f3.onrender.com/api/register",data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})



const userSlice=createSlice({
    name:"users",
    initialState:{
        userData:{},
        token:localStorage.getItem('token')||null,
        loading:false,
        error:null,
        isAuth:localStorage.getItem('isAuth')||false
    },
reducers:{
    logout:(state)=>{
        state.token=null
        state.isAuth=false
        localStorage.removeItem("isAuth")
        localStorage.removeItem("token")

    }
},
    extraReducers:(builder)=>{
        builder.addCase(UserLogin.pending,(state)=>{
            state.loading=true
        })
        .addCase(UserLogin.fulfilled,(state,action)=>{
            state.loading=false
            state.error=null
            state.token=action.payload.token
            state.isAuth=true
            localStorage.setItem("token",action.payload.token)
            localStorage.setItem("isAuth",true)
        })
        .addCase(UserLogin.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            state.token=null
            state.isAuth=false
        })

        .addCase(UserRegister.pending,(state)=>{
            state.loading=true
        })
        .addCase(UserRegister.fulfilled,(state,action)=>{
            state.loading=false
            state.error=null
            state.token=action.payload.token
            state.isAuth=true
            localStorage.setItem("token",action.payload.token)
            localStorage.setItem("isAuth",true)
        })
        .addCase(UserRegister.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            state.token=null
            state.isAuth=false
        })
       
    }
})



export default userSlice.reducer
export const {logout}=userSlice.actions