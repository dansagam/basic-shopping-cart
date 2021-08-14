import express from 'express'
import {getItems, addItem, deleteItem, updateItem} from '../../controllers/itemsControllers.js'
import auth from '../../middlewares/auth.js'

const router = express.Router()

router
     .route('/')
     .get(getItems)
     .post(auth, addItem)
  

router
     .route('/:id')
     .delete(auth, deleteItem)
     .put(auth, updateItem)

     

export default router


