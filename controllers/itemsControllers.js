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
          console.log('get error')
     }
}

export async function addItem(req, res, next) {
     try {
          const item = await Item.create(req.body)
          return res.status(201).json({
               success: true,
               data: item
           })          
     } catch (error) {
          console.log(`add item err ${error}`)
          
     }

}
export async function deleteItem(req, res, next) {
     try {
          const item = await Item.findByIdAndRemove(req.params.id)
          return res.status(200).json({
               success: true,
               data: {}

          })
     } catch (err) {
          return res.status(404).json({
               success: false
          })
     }
}

export async function updateItem(req, res, next) {
     try {
          const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
          return res.status(200).json({
               success: true,
               data: item
          })
     } catch (err) {
          
          console.log(`update ${err}`)
     }
}