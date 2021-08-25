import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit'



export const getItems = createAsyncThunk('items/getItems', async (arg, {rejectWithValue}) =>{
   try {
      const response = await axios.get('/api/items')
      return response.data.data
   } catch (error) {
      return rejectWithValue(error.response.data.error)
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
      return rejectWithValue(error.response.data.error)
      
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
      return rejectWithValue(error.response.data.error)  
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
      return rejectWithValue(error.response.data.error)
      
   }
})

export const ItemReducers = createSlice({
   name: 'items',
   initialState: {
      items: [],
      error: null,
      loading: false
   },
   reducers: {
      GET_ITEMS: (state, action) => {
         return {
            ...state,
            loading: false,
            items: action.payload,
         }
      },
      ADD_ITEM: (state, action) => {
         return {
            ...state,
            items: [...state.items, action.payload]
         }
      },
      DELETE_ITEM: (state, action) => { 
         return {
            ...state,
            items:  state.items.filter(item => item.id !==action.payload)
         }
      },
      EDIT_ITEM: (state, action) => {
         const { id, name} = action.payload
         const existItem = state.items.find(item => item.id === id)
         if(existItem){
            existItem.name = name
         }
      },
      ITEMS_LOADING: (state) =>{
         return{
            ...state,
            loading: true 
         }
      },
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
      [addItem.fulfilled]: (state, action) => {
         return {
            ...state,
            items: [...state.items, action.payload]
         }
      },
      [deleteItem.fulfilled]: (state, action) => { 
         return {
            ...state,
            items:  state.items.filter(item => item._id !==action.payload)
         }
      },
      [editItem.fulfilled]: (state, action) =>{
         const { _id, name } = action.payload
         const existingItem = state.items.find((item) => item._id === _id)
         if(existingItem) {
            existingItem.name = name
         }
      },
   }
});

export const { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, ITEMS_ERROR, EDIT_ITEM } = ItemReducers.actions
export const selectItem = state => state.item.items


export default ItemReducers.reducer;
