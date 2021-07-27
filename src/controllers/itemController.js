import { createAsyncThunk, isAsyncThunkAction } from '@reduxjs/toolkit'
import axios from 'axios'
// import {v4 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'
import { GET_ITEMS,ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, ITEMS_ERROR} from '../reducers/ItemReducers'

export const ReducerActionProvider = () =>{

   const dispatch = useDispatch()
   async function getItem() {
      dispatch(ITEMS_LOADING())
      try {
         axios
            .get('/api/items')
            .then(res => {
               dispatch(GET_ITEMS(res.data.data) )
            })
      } catch (error) {
         dispatch(ITEMS_ERROR(error.response.data.error))
      }
   }
   async function addItem(item) {
      const config = {
         header: {
            'Content-Type': 'application/json'
         }
      }
      try {
         axios
           .post('/api/items', item, config)
           .then(res => {
              dispatch(ADD_ITEM(res.data.data))
           } )
      } catch (error) {
         dispatch(ITEMS_ERROR(error.response.data.error))
         
      }
   }
   async function deleteItem(id) {
      try {
         axios
           .delete(`/api/items/${id}`)
           .then(res => {
               dispatch(DELETE_ITEM(id))
           })
      } catch (error) {         
         dispatch(ITEMS_ERROR(error.response.data.error))
         
      }
   }
   return (
      <div className="">

      </div>
   )
} 
export const fight =()=>{
   console.log('kjjj')
}
export const { addItem, getItem, deleteItem} = ReducerActionProvider