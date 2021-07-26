// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import {v4 as uuid} from 'uuid'
import {  useDispatch, useSelector } from 'react-redux'
import { GET_ITEMS, selectItem, DELETE_ITEM } from '../reducers/ItemReducers'


const ShoppingList = () => {
   const itemValue = useSelector(selectItem)
   // const [nameInput, setNameInput] = useState('')
   const dispatch = useDispatch();
   useEffect(() =>{
      dispatch(GET_ITEMS(itemValue))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return (
      <div>
         <Container>
            <ListGroup>
               <TransitionGroup className='shopping-list'>
                  {itemValue.map(({id, name})=>(
                     <CSSTransition key={id} timeout={500} classNames='fade'>
                        <ListGroupItem key={id}>
                           <Button
                              className='remove-btn'
                              color='danger'
                              size='sm'
                              onClick={
                                 ()=> 
                                 dispatch(DELETE_ITEM(id))
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
