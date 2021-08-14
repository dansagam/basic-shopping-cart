
import express, { json } from 'express'
// import mongoose from "mongoose"
import path from 'path'
const app = express()
import morgan from 'morgan'
import { config } from 'dotenv'
import seedDB from './config/dB.js'
import authRoutes from './routes/api/authRoutes.js'
import itemRoutes from './routes/api/itemRoutes.js'
import userRoutes from './routes/api/userRoutes.js';
// import    auth    from './middlewares/auth'

const    PORT           = process.env.PORT || 5000

config({path: './config/config.env'})

seedDB()



app.use(json())

if(process.env.NODE_ENV === 'development') {
     app.use(morgan('dev'))
 }
if(process.env.NODE_ENV === 'production'){
app.use(express.static('clients/build'))
}


// app.use(auth)
app.use('/api/items', itemRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auths', authRoutes)
app.listen(
    PORT, () => 
    console.log(`MERN shopping app 
        ${process.env.NODE_ENV} listening on port ${PORT} 🔥 !` )
)