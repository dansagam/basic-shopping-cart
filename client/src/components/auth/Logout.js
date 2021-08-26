import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { logoutSucess } from '../../reducers/authReducers'
import { NavLink } from 'reactstrap'

const Logout = () => {
   const dispatch = useDispatch()
   
   return (
      <Fragment>
         <NavLink onClick={() => dispatch(logoutSucess())} href='#'>
            Logout
         </NavLink>

      </Fragment>
   )
}

export default Logout
