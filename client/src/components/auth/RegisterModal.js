/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import { 
   Button, 
   Modal, 
   ModalHeader, 
   ModalBody, 
   Form, 
   FormGroup, 
   Label, 
   Input,
   NavLink,
   Alert
} from 'reactstrap';
import { clearErrors, registerUser } from '../../reducers/authReducers';

import {  useDispatch, useSelector } from 'react-redux'



const RegisterModal = () => {
   const dispatch = useDispatch();
   const { isAuthenticated, error} = useSelector(state => state.auth)
   

   const [modal, setModal] = useState(false);
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [msg, setMsg] = useState(null)
   const toggle = () => {
      // console.log(clearErrors())
      setModal(!modal)
      dispatch(clearErrors())
      
   };
   useEffect(()=>{
      setMsg(error.msg)
      if(modal){
         if (isAuthenticated){
            toggle()
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [error])

   const onSubmit = (e) =>{
      e.preventDefault()
      dispatch(registerUser({name: name, email: email, password: password}) )
      
      // toggle()
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
            <ModalHeader toggle={toggle}>Register User</ModalHeader>
            <ModalBody>
               {msg ? <Alert color='danger'>{`${msg}`}</Alert> : null}
               <Form onSubmit={onSubmit} >
                  <FormGroup>
                     <Label for='name'>Name</Label>
                     <Input 
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Enter your name' 
                        value={name} 
                        onChange={ (e)=> setName(e.target.value)} 
                     />
                     <Label for='email'>Email</Label>
                     <Input 
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email' 
                        value={email} 
                        onChange={ (e)=> setEmail(e.target.value)} 
                     />
                     <Label for='password'>Password</Label>
                     <Input 
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password' 
                        value={password} 
                        onChange={ (e)=> setPassword(e.target.value)} 
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
