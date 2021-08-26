import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit'



export const getItems = createAsyncThunk('items/getItems', async (arg, {rejectWithValue}) =>{
   try {
      const response = await axios.get('/api/items')
      return response.data.data
   } catch (error) {
      return rejectWithValue(error.response)
   }
});
export const addItem = createAsyncThunk('items/addItem', async (newItemPost, {getState, rejectWithValue}) =>{
   let token = getState().auth.token;
   const config = {
      headers: {
         'Content-Type': 'application/json',
         'x-auth-token': token
      }
   }
   try {
      
      const response = await axios.post('/api/items', newItemPost, config)
      return response.data.data
      
   } catch (error) {
      return rejectWithValue(error.response)
      
   }

})
export const editItem = createAsyncThunk('items/editItem', async ({_id, name}, {getState, rejectWithValue}) => {
   let token = getState().auth.token;
   const config = {
      headers: {
         'Content-Type': 'application/json',
         'x-auth-token': token
      }
   }
   try {
      const response = await axios.put(`/api/items/${_id}`, {name: name}, config)
      return response.data.data
   } catch (error) {
      return rejectWithValue(error.response)  
   }
})

export const deleteItem = createAsyncThunk('items/deleteItem', async (itemId, {getState, rejectWithValue}) =>{
   try {
      let token = getState().auth.token;
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
         }
      }
      // eslint-disable-next-line no-unused-vars
      const reponse = await axios.delete(`/api/items/${itemId}`, config)
      return (itemId)
   } catch (error) {         
      return rejectWithValue(error.response)
      
   }
})

export const ItemReducers = createSlice({
   name: 'items',
   initialState: {
      items: [],
      error: {
         msg: {},
         status: null,
         id: null
      },
      loading: false
   },
   reducers: {
      ITEMS_ERROR: (state, action) =>{
         return {
            ...state,
            error: action.payload
         }
      }
   }, 
   extraReducers: {
      [getItems.pending]: (state, action) =>{
         state.loading = true
      },
      [getItems.fulfilled]:  (state, action) => {  
         // state.loading = false
         // state.items = state.items.concat(action.payload)
         return {
            ...state,
            loading: false,
            items: action.payload,
         }

      },
      [getItems.rejected]: (state, action) =>{
         return {
            ...state,
            error:{
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }

      },
      [addItem.fulfilled]: (state, action) => {
         return {
            ...state,
            items: [...state.items, action.payload]
         }
      },
      [addItem.rejected]: (state, action) =>{
         return {
            ...state,
            error:{
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }

      },
      [deleteItem.fulfilled]: (state, action) => { 
         return {
            ...state,
            items:  state.items.filter(item => item._id !==action.payload)
         }
      },
      [deleteItem.rejected]: (state, action) =>{
         return {
            ...state,
            error:{
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }

      },
      [editItem.fulfilled]: (state, action) =>{
         const { _id, name } = action.payload
         const existingItem = state.items.find((item) => item._id === _id)
         if(existingItem) {
            existingItem.name = name
         }
      },
      [editItem.rejected]: (state, action) =>{
         return {
            ...state,
            error:{
               msg: action.payload.data.msg,
               status: action.payload.status,
               id: action.payload.statusText
            }
         }
      },
   }
});

export const { ITEMS_ERROR } = ItemReducers.actions
export const selectItem = state => state.item.items


export default ItemReducers.reducer;
