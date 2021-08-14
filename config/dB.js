import mongoose from "mongoose";

const seedDB =  async () =>{
    try {
        mongoose.Promise = global.Promise
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log(`💻 CONNECTED TO DB successfully `)
    } catch (err) {
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}

export default seedDB;