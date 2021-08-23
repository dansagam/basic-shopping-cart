import React, {useState} from 'react'
import { 
   Button, 
   Modal, 
   ModalHeader, 
   ModalBody, 
   Form, 
   FormGroup, 
   Label, 
   Input,
   NavLink
} from 'reactstrap';

// import {  useDispatch } from 'react-redux'



const RegisterModal = () => {
   // const dispatch = useDispatch();

   const [modal, setModal] = useState(false);
   const [nameInput, setNameInput] = useState('')
   const [emailInput, setEmailInput] = useState('')
   const [passwordInput, setPasswordInput] = useState('')
   // const [msgInput, setMsgInput] = useState(null)
   const toggle = () => setModal(!modal);

   const onSubmit = (e) =>{
      e.preventDefault()

      
      toggle()
   }
   return (
      <div>
         <NavLink color="dark" 
            // style={{marginBottom: '2rem'}}
            onClick={toggle}
            href='#'
            >
               Register
         </NavLink>
         <Modal isOpen={modal} toggle={toggle} className='dsddds'>
            <ModalHeader toggle={toggle}>Shopping Form</ModalHeader>
            <ModalBody>
               <Form onSubmit={onSubmit} >
                  <FormGroup>
                     <Label for='name'>Name</Label>
                     <Input 
                        required
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Enter your name' 
                        value={nameInput} 
                        onChange={ (e)=> setNameInput(e.target.value)} 
                     />
                     <Label for='email'>Email</Label>
                     <Input 
                        required
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email' 
                        value={emailInput} 
                        onChange={ (e)=> setEmailInput(e.target.value)} 
                     />
                     <Label for='password'>Password</Label>
                     <Input 
                        required
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password' 
                        value={passwordInput} 
                        onChange={ (e)=> setPasswordInput(e.target.value)} 
                     />
                     <Button color='dark' style={{marginTop: '2rem'}} block>Register </Button>
                  </FormGroup>
               </Form>
            </ModalBody>
         </Modal>
      </div>
   )
}

export default RegisterModal
