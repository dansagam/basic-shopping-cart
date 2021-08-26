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
// import {v4 as uuid} from 'uuid'
import {  useDispatch, useSelector } from 'react-redux'
import { /**ADD_ITEM, */ addItem } from '../reducers/ItemReducers';

const ItemForm = (props) => {
   // const {
   //   buttonLabel,
   //   className
   // } = props;
   // const [nameInput, setNameInput] = useState('')
   const {isAuthenticated} = useSelector(state => state.auth)
   const dispatch = useDispatch();

   const [modal, setModal] = useState(false);
   const [nameInput, setNameInput] = useState('')
   const toggle = () => setModal(!modal);
   const onSubmit =(e)=>{
      e.preventDefault()
      const newItemObject ={
         name: nameInput
      }
      
      dispatch(addItem(newItemObject))
      toggle()
      setNameInput('')

   }

   return (
      <div>
         {isAuthenticated ? 
         <Button color="dark" 
            style={{marginBottom: '2rem'}}
            onClick={toggle}
            >
               Add Item
         </Button> 
         : 
         <h4 className="mb-3 ml-3">Please log in to add manage your items</h4>}

         <Modal isOpen={modal} toggle={toggle} className='dsddds'>
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
