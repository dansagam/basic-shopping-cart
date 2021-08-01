// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {  useDispatch, useSelector } from 'react-redux'
import {selectItem, getItems, deleteItem } from '../reducers/ItemReducers'


const ShoppingList = () => {
   const itemValue = useSelector(selectItem)
   const dispatch = useDispatch();
   useEffect(() =>{
      dispatch(getItems())
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch])
   return (
      <div>
         <Container>
            <ListGroup>
               <TransitionGroup className='shopping-list'>
                  {itemValue.map(({_id, name})=>(
                     <CSSTransition key={_id} timeout={500} classNames='fade'>
                        <ListGroupItem key={_id}>
                           <Button
                              className='remove-btn'
                              color='danger'
                              size='sm'
                              onClick={
                                 ()=> 
                                 dispatch(deleteItem(_id))
                              }
                           >
                              &times;
                           </Button>
                           {name}
                        </ListGroupItem>
                     </CSSTransition>
                  ))}
               </TransitionGroup>
            </ListGroup>
         </Container>
         
      </div>
   )
}

export default ShoppingList
