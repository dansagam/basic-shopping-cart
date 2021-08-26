import React from 'react'
import { Button } from 'reactstrap'
import {  useDispatch, useSelector } from 'react-redux'
import {  deleteItem } from '../reducers/ItemReducers'

const ItemList = (props) => {
   const {isAuthenticated} = useSelector(state => state.auth)
   const dispatch = useDispatch();
   return (
      <>
         {  isAuthenticated ?
            <Button
               className='remove-btn'
               color='danger'
               size='sm'
               onClick={
                  ()=> 
                  dispatch(deleteItem(props.onId))
               }
            >
               &times;
            </Button>
         : null
         }
         {props.itemName}
      </>
   )
}

export default ItemList
