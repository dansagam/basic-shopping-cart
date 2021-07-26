import {v4 as uuid} from 'uuid'
import { createSlice } from '@reduxjs/toolkit'

export const ItemReducers = createSlice({
   name: 'item',
   initialState: {
      items: [
         {id: uuid(), name: 'Milk' },
         {id: uuid(), name: 'Meat' },
         {id: uuid(), name: 'Gala' },
         {id: uuid(), name: 'Spagheti'},
      ]
   },
   reducers: {
      GET_ITEMS: (state, action) => {
         return {
            ...state,
            items: action.payload
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
   }
});

export const { GET_ITEMS, ADD_ITEM, DELETE_ITEM } = ItemReducers.actions
export const selectItem = state => state.item.items



export default ItemReducers.reducer;


// function ItemReducers (state = initialState, action) {
//    switch(action.type) {
//       case GET_ITEMS:
//          return {
//             ...state,
//             // items: action.payload
//          }
//       case DELETE_ITEM: 
//       return {
//          ...state,
//          items:  state.items.filter(item => item._id !==action.payload)
//       }
//       case ADD_ITEM:
//          return {
//             ...state,
//             items: [...state.items, action.payload]
//          }
//       case 'TRANSACTION_ERROR':
//          return {
//             ...state,
//             error: action.payload
//          }
//       default:
//          return state 
//    }
// }


