import {v4 as uuid} from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
   items: [
      {id: uuid(), name: 'Milk' },
      {id: uuid(), name: 'Meat' },
      {id: uuid(), name: 'Gala' },
      {id: uuid(), name: 'Spagheti'},
   ]
}
function ItemReducers (state = initialState, action) {
   switch(action.type) {
      case GET_ITEMS:
         return {
            ...state,
            items: action.payload
         }
      case DELETE_ITEM: 
      return {
         ...state,
         items:  state.items.filter(item => item._id !==action.payload)
      }
      case ADD_ITEM:
         return {
            ...state,
            items: [...state.items, action.payload]
         }
      case 'TRANSACTION_ERROR':
         return {
            ...state,
            error: action.payload
         }
      default:
         return state 
   }
}


export default ItemReducers
