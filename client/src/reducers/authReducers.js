import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const AuthReducers = createSlice({
   name: 'auths',
   initialState: {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      isLoading: false,
      user: null
   },
   reducers: {
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
         return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
         }

      },
      registerSucess: (state, action) => {
         return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
         }
      },
      authError: (state, action) =>{
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
         }
      },
      loginFail: (state, action) =>{
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
         }

      },
      logoutSucess: (state, action)=>{
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
         }

      },
      registerFail: (state, action) =>{
         return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false
         }

      }

   },
})

export const { userLoaded, 
               userLoading, 
               registerFail, 
               registerSucess, 
               loginFail, 
               loginSucess, 
               logoutSucess, 
               authError
            } = AuthReducers.actions

export default AuthReducers.reducer;