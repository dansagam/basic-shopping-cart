import { useState, useEffect } from 'react'
import { Container, ListGroup, ListGroupItem /**Button*/ } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {  useDispatch, useSelector } from 'react-redux'
import {selectItem, getItems /**deleteItem */  } from '../reducers/ItemReducers'
import EditItemForm from './EditItemForm'
import ItemList from './ItemList'


const ShoppingList = () => {
   const  [editLogic, setEditLogic] = useState(false)
   const  [eTarget, setETarget] = useState('')
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
                           {!editLogic 
                              ? <> 
                                 <ItemList onId={_id} itemName={name} /> 
                                 <span 
                                    style={{float: 'right', cursor: 'pointer' }} 
                                    onDoubleClick={(e)=> {
                                       setEditLogic(!editLogic)
                                       setETarget(_id)
                                    }
                                    }
                                 >
                                    🔥
                                 </span>
                              </>
                              : editLogic && (eTarget === _id) ?  
                                 <EditItemForm 
                                    onEditLogic={setEditLogic} 
                                    onSetETarget={setETarget}
                                    editValue= {name}
                                    targetId = {_id}
                                 />  
                              : <ItemList onId={_id} itemName={name}  />}
                           
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
