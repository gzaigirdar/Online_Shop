import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.DB_STRING 

async function initdb(){
    try{
        const db = mongoose.connect(url,{ useNewUrlParser:true,
    useUnifiedTopology:true,}).then(()=>{
        console.log('connected to db server')
    
    
    })
   }
    catch (error){
        console.log(err)
        process.exit(1);
    }


}

// error event listen for mongo db, catches error and closes the app
/*mongoose.connection.on('error',(err)=>{
    
    console.log(err)
    process.exit(1);
}) */

export default initdb;