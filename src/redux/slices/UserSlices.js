import{createSlice,createAsyncThunk, isRejectedWithValue} from "@reduxjs/toolkit"
import axios from 'axios'

export const useRegister=createAsyncThunk('/register',async(data,{})=>{
  try {
    const res=await axios.post("http://localhost:8081/api/login",data)
    return res.data
  } catch (error) {
    return rejectWithValue(error.message.data.msg)
  }  
}
.addCase






)






const UserSlice=createSlice({
    name:"users",
    initstate:{
        userData:{},
        token: localStorage.getItem('token')||null,
        loading:false,
        error:null,
        isAuth:localStorage.getItem('isAuth')||null,

    },
extraReducers:(builder)
.builder.addCase(UserLogin.pending,(state)=>{
state.loading=true
state.isloading.false
state.error=action,payload
localStorage.setItem("token",action.payload.token)
localStorage.setItem("isAuth",true)
)
})
.addCase(UserLogin.fulfilled,(state,action)=>{
  


  addCase(userRegister.pending,(state)=>{
    state.loading=true
    state.isloading.false
    state.error=action,payload
    localStorage.setItem("token",action.payload.token)
    localStorage.setItem("isAuth",true)
})



export default UserSlice.reducer 