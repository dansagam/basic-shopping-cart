/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   NavbarText
 } from 'reactstrap';
import Login from './auth/Login';
import Logout from './auth/Logout';
import RegisterModal from './auth/RegisterModal';


const AppNavbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const { isAuthenticated, user } = useSelector(state => state.auth)
 
   const toggle = () => setIsOpen(!isOpen);
   const loginLink = (
      <Fragment>
         <NavItem>
            <span className='navbar-text mr-3'>
               <strong>{user ? `Welcome ${user.name}` : ''}</strong>
            </span>
         </NavItem> 
         <NavItem>
            <Logout />
         </NavItem> 

      </Fragment>
   )
   const regLink = (
      <Fragment>
         <NavItem>
            <RegisterModal />
         </NavItem>
         <NavItem>
            <Login />
         </NavItem>
      </Fragment>

   )
 
   return (
      <div>
         <Navbar color="dark" dark expand="sm" className='mb-5'>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <Nav className="ml-auto" navbar>
                  <NavItem>
                     <NavLink href="https://github.com/dansagam" target='_blank'>GitHub</NavLink>
                  </NavItem>
                  { isAuthenticated ? loginLink : regLink }

                  {/* <UncontrolledDropdown nav inNavbar>
                     <DropdownToggle nav caret>
                     Options
                     </DropdownToggle>
                     <DropdownMenu right>
                        <DropdownItem>
                           Option 1
                        </DropdownItem>
                        <DropdownItem>
                           Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                           Reset
                        </DropdownItem>
                     </DropdownMenu>
                  </UncontrolledDropdown> */}
               </Nav>
               {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
         </Navbar>
      </div>
   );
 }

export default AppNavbar
