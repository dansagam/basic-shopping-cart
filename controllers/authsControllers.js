import User from '../models/User.js'
import path from 'path'
import { config } from 'dotenv'
import generateToken from '../utils/generateToken.js'
      config({path: '../config/config.env'})


export async function authenticateUser(req, res, next){
   try {
      const { email, password} = req.body
      if(!email || !password){
         return res.status(400).json({msg : 'bad request, please enter all field'})
      }
      const existingUser = await User.findOne({email})
      if(!existingUser) return res.status(400).json({ msg: 'user doesn\'t exist'})
      
      if (existingUser && (await existingUser.matchPassword(password))){
         res.status(201).json({
            token: generateToken(existingUser._id),
            user: {
               _id: existingUser._id,
               email: existingUser.email,
               name: existingUser.name 
            }
         })
      }else{
         res.status(401)
         throw new Error('Invalid credential')
      }

   } catch (error) {
      res.json({
         msg: error.message
      })
   }
}
export async function getAuthenticatedUser(req, res, next){
   try {
      const authUser = await User.findById(req.user.id).select('-password')
      return res.json(authUser)
   } catch (error) {
      console.log(error)
      throw error
   }
}
