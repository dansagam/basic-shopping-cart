import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit'



export const getItems = createAsyncThunk('items/getItems', async () =>{
   try {
      const response = await axios.get('/api/items')
      return response.data.data
   } catch (error) {
      return error.response.data.error
   }
});
export const addItem = createAsyncThunk('items/addItem', async (newItemPost) =>{
   const config = {
      header: {
         'Content-Type': 'application/json'
      }
   }
   try {
      const response = await axios.post('/api/items', newItemPost, config)
      return response.data.data
      
   } catch (error) {
      return error.response.data.error
      
   }

})

export const deleteItem = createAsyncThunk('items/deleteItem', async (itemId) =>{
   try {
      // eslint-disable-next-line no-unused-vars
      const reponse = axios.delete(`/api/items/${itemId}`)
      return (itemId)
   } catch (error) {         
      return error.response.data.error
      
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
   }
});

export const { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, ITEMS_ERROR, EDIT_ITEM } = ItemReducers.actions
export const selectItem = state => state.item.items


export default ItemReducers.reducer;
