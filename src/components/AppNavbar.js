/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
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
const AppNavbar = () => {
   const [isOpen, setIsOpen] = useState(false);
 
   const toggle = () => setIsOpen(!isOpen);
 
   return (
      <div>
         <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <Nav className="mr-auto" navbar>
                  <NavItem>
                     <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink href="https://github.com/dansagam">GitHub</NavLink>
                  </NavItem>
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
               <NavbarText>Simple Text</NavbarText>
            </Collapse>
         </Navbar>
      </div>
   );
 }

export default AppNavbar
