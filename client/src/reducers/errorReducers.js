import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const ErrorReducers = createSlice({
   name: "errors",
   initialState: {
      msg: {},
      status: null,
      id: null
   },
   reducers: {
      getErrors: (state, action) =>{
         return{
            msg: action.payload.msg,
            status: action.payload.status,
            id: action.payload.id
         }
      },
      clearError: (state, action) =>{
         return{
            msg: {},
            status: null,
            id: null
         }
      }
   }
})

export const {getErrors, clearError} = ErrorReducers.actions

export default ErrorReducers.reducer



