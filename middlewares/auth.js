import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import path from 'path'
import { config } from 'dotenv'

      config({path: '../config/config.env'})

function auth(req, res, next){
   const token = req.header('x-auth-token')

   if(!token){
      res.status(401).json({msg: "unauthorised token"})
   }
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decoded
      next()
   } catch (error) {
      res.status(400).json({msg: 'token not valid'})
   }
}



export default auth

