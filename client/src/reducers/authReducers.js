import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUser = createAsyncThunk('auths/loadUser', async (arg, {rejectWithValue, getState}) =>{
   try {
      // console.log(getState())
      let token = getState().auth.token;
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
         }
      }
      // if(token) {
      //    config.headers['x-auth-token'] = token
      // }
      const getUser = await axios.get('/api/auths/user', config)
      // console.log(token)
      // console.log(getUser.data)
      
      return getUser.data
   } catch (err) {
      
      throw rejectWithValue(err.response)
      
   }
})

export const registerUser = createAsyncThunk('auths/registerUser', async({name, email, password}, {dispatch, rejectWithValue}) => {
   try {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      }
   
      const body = JSON.stringify({name, email, password})
   
      const registeredUser = await axios.post('/api/users', body, config)
      
      return registeredUser.data
      
   } catch (err) {
      // dispatch(returnError())
      throw rejectWithValue(err.response)
   }
})

export const loginUser = createAsyncThunk('auth/loginUser', async({email, password}, {dispatch, rejectWithValue}) => {
   try {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      }
      const body = JSON.stringify({ email, password})

      const loggedinUser = await axios.post('/api/auths', body, config)
      console.log(loggedinUser)
      return loggedinUser.data
   } catch (err) {
      console.log(err.response)
      throw rejectWithValue(err.response)
   }
})

export const AuthReducers = createSlice({
   name: 'auths',
   initialState: {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      isLoading: false,
      user: null,
      error: {
         msg: {},
         status: null,
         id: null
      }
   },
   reducers: {
      getErrors: (state, action) =>{
         return{
            error:{
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }
      },
      clearErrors: (state, action) =>{
         // console.log(state)
         return{
            ...state,
            error: {
               msg: {},
               status: null,
               id: null
            }
         }
      },
      returnError: (state, action) =>{
         console.log(...state)
         return{
            error: {
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }
      },
      userLoading: (state, action)=>{
         return {
            ...state,
            isLoading: true
         }
      },
      userLoaded: (state, action) => {
         return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload
         }
      },
      loginSucess: (state, action) =>{
         localStorage.setItem('token', action.payload.token)
         return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
         }

      },
      registerSucess: (state, action) => {
         localStorage.setItem('token', action.payload.token)
         return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
         }
      },
      authError: (state, action) =>{
         localStorage.removeItem('token')
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
         }
      },
      loginFail: (state, action) =>{
         localStorage.removeItem('token')
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
         }

      },
      logoutSucess: (state, action)=>{
         localStorage.removeItem('token')
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
         }

      },
      registerFail: (state, action) =>{
         localStorage.removeItem('token')
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
         }

      }

   },
   extraReducers: {
      [loadUser.pending]: (state, action) =>{
         return {
            ...state,
            isLoading: true
         }

      }, 
      [loadUser.fulfilled]: (state, action) =>{
         return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload
         }
      },
      [loadUser.rejected]: (state, action) =>{
         localStorage.removeItem('token')
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: {
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }
      },
      [registerUser.fulfilled]: (state, action) =>{
         localStorage.setItem('token', action.payload.token)
         return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
         }
      },
      [registerUser.rejected]: (state, action) =>{
         
         localStorage.removeItem('token')
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: {
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }
      },
      [loginUser.fulfilled]: (state, action) =>{
         localStorage.setItem('token', action.payload.token)
         return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
         }
      },
      [loginUser.rejected]: (state, action) => {
         localStorage.removeItem('token')
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: {
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }
      }
   }
})

export const { userLoaded, 
               userLoading, 
               registerFail, 
               registerSucess, 
               loginFail, 
               loginSucess, 
               logoutSucess, 
               authError,
               getErrors, 
               clearErrors, 
               returnError
            } = AuthReducers.actions

export default AuthReducers.reducer;