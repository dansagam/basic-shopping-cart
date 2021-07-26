import React, {useState} from 'react'
import { 
   Button, 
   Modal, 
   ModalHeader, 
   ModalBody, 
   Form, 
   FormGroup, 
   Label, 
   Input
} from 'reactstrap';
import {v4 as uuid} from 'uuid'
import {  useDispatch } from 'react-redux'
import { ADD_ITEM } from '../reducers/ItemReducers';

const ItemForm = (props) => {
   // const {
   //   buttonLabel,
   //   className
   // } = props;
   // const [nameInput, setNameInput] = useState('')
   const dispatch = useDispatch();

   const [modal, setModal] = useState(false);
   const [nameInput, setNameInput] = useState('')
   const toggle = () => setModal(!modal);
   const onSubmit =(e)=>{
      e.preventDefault()
      const newItemObject ={
         id: uuid(),
         name: nameInput
      }
      
      dispatch(ADD_ITEM(newItemObject))
      toggle()
      setNameInput('')

   }

   return (
      <div>
         <Button color="dark" 
            style={{marginBottom: '2rem'}}
            onClick={toggle}>Add Item</Button>
         <Modal isOpen={modal} toggle={toggle} className=''dakdad>
            <ModalHeader toggle={toggle}>Shopping Form</ModalHeader>
            <ModalBody>
               <Form onSubmit={onSubmit} >
                  <FormGroup>
                     <Label for='item'>Item</Label>
                     <Input 
                        required
                        type='text'
                        name='nameInput'
                        id='item'
                        placeholder='enter your shopping item' 
                        value={nameInput} 
                        onChange={ (e)=> setNameInput(e.target.value)} 
                     />
                     <Button color='dark' style={{marginTop: '2rem'}}>Add Item</Button>
                  </FormGroup>
               </Form>
            </ModalBody>
         </Modal>
      </div>
   )
}

export default ItemForm
