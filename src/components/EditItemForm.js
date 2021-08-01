
import React, {useState} from 'react'
import { Input, Button, Form } from 'reactstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { selectItem,  } from '../reducers/ItemReducers'
import { editItem } from '../reducers/ItemReducers'

const EditItemForm = (props) => {
   // eslint-disable-next-line no-unused-vars
   const itemValue = useSelector(selectItem)
   const dispatch = useDispatch();

   const [name, setName] = useState(props.editValue)
   const onSubmit = (e) => {
      e.preventDefault()
      const newEditItem = {
         _id: props.targetId,
         name: name
      }
      dispatch(editItem(newEditItem))
      props.onEditLogic(false)
   }
   return (
      <Form onSubmit={onSubmit} >
         <Input type='text' name={name} value={name} onChange={(e) => setName(e.target.value)} />
         <Button color='dark' style={{marginTop: '2rem'}}>Save Item</Button>
      </Form>
   )
}

export default EditItemForm
