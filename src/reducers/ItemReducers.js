import { createSlice } from '@reduxjs/toolkit'

export const ItemReducers = createSlice({
   name: 'item',
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
   }
});

export const { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, ITEMS_ERROR } = ItemReducers.actions
export const selectItem = state => state.item.items


export default ItemReducers.reducer;
