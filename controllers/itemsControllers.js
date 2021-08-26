import Item from '../models/Item.js';


export async function getItems(req, res, next){
     try {
          const items = await Item.find().sort({date: -1})
          return res.status(200).json({
              success: true,
              count: items.length,
              data: items
  
          });
     } catch (error) {
          return res.status(401).json({
               msg: error.message
          })
     }
}

export async function addItem(req, res, next) {
     try {
          const item = await Item.create(req.body)
          if(item){
               return res.status(201).json({
                    success: true,
                    data: item
                }) 

          }else{
               res.status(401)
               throw new Error('check you variable added')

          }   
     } catch (err) {
          
          return res.status(401).json({
               success: false,
               msgErr: err.message,
               msg: 'item could not be added'
          })
          
     }

}
export async function deleteItem(req, res, next) {
     try {
          const item = await Item.findByIdAndRemove(req.params.id)
          if(item){
               return res.status(200).json({
                    success: true,
                    data: {}
               })
          }else{
               res.status(404)
               throw new Error('item not found')
          }
     } catch (err) {
          return res.status(404).json({
               success: false,
               msgErr: err.message,
               msg: 'item not found'
          })
     }
}

export async function updateItem(req, res, next) {
     try {
          const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
          if(item){
               return res.status(200).json({
                    success: true,
                    data: item
               })
          }else{
               res.status(401)
               throw new Error('Update not 1 Complete')
          }
     } catch (err) {
          return res.status(401).json({
               success: false,
               msgErr: err.message,
               msg: 'invalid data to update'
          })
     }
}