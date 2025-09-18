import app from './app.js';
import dotenv from 'dotenv';
import helmet from 'helmet';
import express from 'express'
import cookieParser from 'cookie-parser'
import mongoSantitize from 'express-mongo-sanitize'
import { urlencoded } from 'express';
import cors from 'cors'

import mainRouter from './Routes/main.router.js';
import initdb from './db.js';
dotenv.config()

const port = process.env.PORT || 5000;
// expres json convers req body to json object
app.use(express.json())
// url encoded parse url encoded data to json object
app.use(urlencoded({extended: true}))
// add more information about http erros 
app.use(helmet())
// help prevent no-sql injection 
app.use(mongoSantitize())
// cookie parser allows extracting cookeis from res or req from user
app.use(cookieParser())
// protects routes and restricts access to the server 
app.use(cors({
    origin: "http://localhost:3000", credentials: true}))
app.use(mainRouter)
initdb()
app.listen(port,() => {
        console.log(`listening on port ${port}`)
    }
)


app.get('/',(req,res)=>{
    res.send('hello')
})
