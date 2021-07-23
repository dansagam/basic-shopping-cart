import { useState } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {v4 as uuid} from 'uuid'

const ShoppingList = () => {
   const [items, setItems] = useState([
      {id: uuid(), name: 'Milk' },
      {id: uuid(), name: 'Meat' },
      {id: uuid(), name: 'Gala' },
      {id: uuid(), name: 'Spagheti'},
   ])
   return (
      <div>
         <Container>
            <Button
               color='dark'
               style={{marginBottom: '2rem'}}
               onClick={()=>{
                 const name = prompt('enter the item')
                 if(name) {
                    setItems([...items, {id: uuid(), name}]
                    )
                 } 
               }}
            >
               Add Item
            </Button>
            <ListGroup>
               <TransitionGroup className='shopping-list'>
                  {items.map(({id, name})=>(
                     <CSSTransition key={id} timeout={500} classNames='fade'>
                        <ListGroupItem>
                           <Button
                              className='remove-btn'
                              color='danger'
                              size='sm'
                              onClick={()=> 
                                 setItems(items.filter(newitem => newitem.id !== id ))
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
