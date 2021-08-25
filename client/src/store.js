import { configureStore } from '@reduxjs/toolkit'
import  AuthReducers  from './reducers/authReducers'
import ItemReducers from './reducers/ItemReducers'


export default configureStore({
   reducer: {
      item: ItemReducers,
      auth: AuthReducers,
   }
})