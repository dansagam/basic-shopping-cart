import User from '../models/User.js'
import path from 'path'
import { config } from 'dotenv'
import generateToken from '../utils/generateToken.js'

      config({path: '../config/config.env'})


export async function registerUser(req, res, next){
      try {
         const { name, email, password} = req.body
         if(!name || !email || !password){
            return res.status(400).json({msg : 'bad request, please enter all field'})
         }
         const existingUser = await User.findOne({email})
         if(existingUser) { 
            res.status(400) 
            throw new Error('Invalid user data')
         }
         const newUser = await User.create({
            name,
            email,
            password
         })
         if(newUser) {
            res.status(201).json({
               token : generateToken(newUser._id),
               user: {
                  _id: newUser.id,
                  email: newUser.email,
                  name: newUser.name 
               }

            })
         }else{
            res.status(400)
            throw new Error('Invalid user data, user not save')
         }
      } catch (error) {
            res.json({
               msg: error.message
            })
      }
}
