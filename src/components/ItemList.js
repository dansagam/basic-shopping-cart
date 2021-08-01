import React from 'react'
import { Button } from 'reactstrap'
import {  useDispatch, } from 'react-redux'
import {  deleteItem } from '../reducers/ItemReducers'

const ItemList = (props) => {
   // const itemValue = useSelector(selectItem)
   const dispatch = useDispatch();
   return (
      <>
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
         {props.itemName}
      </>
   )
}

export default ItemList
