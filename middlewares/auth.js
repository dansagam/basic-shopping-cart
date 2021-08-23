import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import path from 'path'
import { config } from 'dotenv'

      config({path: '../config/config.env'})

function auth(req, res, next){
   console.log('testing me')
   const token = req.header('x-auth-token')

   if(!token){
      console.log('loo')
      return res.status(401).json({msg: "unauthorised token"})
   }
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decoded)
      req.user = decoded
      next()
   } catch (error) {
      console.log('fight')
      console.log(error)
      return res.status(401).json({msg: 'token not valid'})
   }
}



export default auth

