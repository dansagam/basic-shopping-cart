// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import {v4 as uuid} from 'uuid'
import { connect, useDispatch, useSelector } from 'react-redux'
import { GET_ITEMS, selectItem } from '../reducers/ItemReducers'
import { getItems } from '../actions/itemActions'
import PropTypes from 'prop-types'

const ShoppingList = () => {
   const itemValue = useSelector(selectItem)
   const dispatch = useDispatch();
   useEffect(() =>{
      dispatch(GET_ITEMS())
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return (
      <div>
         <Container>
            <Button
               color='dark'
               style={{marginBottom: '2rem'}}
               onClick={()=>{
                 const name = prompt('enter the item')
                 if(name) {
                  //   setItems([...items, {id: uuid(), name}]
                  //   ) 
                  return
                 } 
               }}
            >
               Add Item
            </Button>
            <ListGroup>
               <TransitionGroup className='shopping-list'>
                  {itemValue.map(({id, name})=>(
                     <CSSTransition key={id} timeout={500} classNames='fade'>
                        <ListGroupItem>
                           <Button
                              className='remove-btn'
                              color='danger'
                              size='sm'
                              onClick={''
                                 // ()=> 
                                 // setItems(items.filter(newitem => newitem.id !== id ))
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

ShoppingList.propTypes = {
   getItems: PropTypes.func.isRequired,
   item: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
   return {
      item: state.item
   }
}
export default connect(mapStateToProps, { getItems })(ShoppingList)
