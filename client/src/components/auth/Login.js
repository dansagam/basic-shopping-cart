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
import { clearErrors, loginUser } from '../../reducers/authReducers';

import {  useDispatch, useSelector } from 'react-redux'



const Login = () => {
   const dispatch = useDispatch();
   const { isAuthenticated, error} = useSelector(state => state.auth)
   

   const [modal, setModal] = useState(false);
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [msg, setMsg] = useState(null)
   const toggle = () => {
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
      dispatch(loginUser({email: email, password: password}) )
   }
   
   return (
      <div>
         <NavLink color="dark" 
            // style={{marginBottom: '2rem'}}
            onClick={toggle}
            href='#'
            >
               Login
         </NavLink>
         <Modal isOpen={modal} toggle={toggle} className='dsddds'>
            <ModalHeader toggle={toggle}>Login User</ModalHeader>
            <ModalBody>
               {msg ? <Alert color='danger'>{`${msg}`}</Alert> : null}
               <Form onSubmit={onSubmit} >
                  <FormGroup>
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
                     <Button color='dark' style={{marginTop: '2rem'}} block>Login</Button>
                  </FormGroup>
               </Form>
            </ModalBody>
         </Modal>
      </div>
   )
}

export default Login
