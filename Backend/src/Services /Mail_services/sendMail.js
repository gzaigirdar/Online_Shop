
import nodemailer from 'nodemailer'
import createHttpError from 'http-errors';
// sendMail.js
import dotenv from 'dotenv';
dotenv.config(); // ensures env is loaded regardless of index.js


const username = process.env.GMAIL;
const password = process.env.GMAIL_PASS;
const emailer = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:username,
        pass:password,
    }
})

async function sendToken_email(token,sender_email){

    const mailoption_token = {
        from: process.env.GMAIL,
        to: sender_email,
        subject: 'reset password',
        html: `<h1> Reset Your Password </h1>
              <p> Click on the link to reset your password </p>
              <a href= "http://localhost:3000/resetpassword/${token}"> http://localhost:3000/resetpassword/${token} </a>
              <p> the token will expire in 10 minutes </p>
              
              <p> if you didn't request a rest password then please ignore this email </p>
                
              `
            }
        console.log('Mail options:', mailoption_token);
        console.log('Using credentials:', process.env.GMAIL, process.env.GMAIL_PASS ? 'PASS SET' : 'NO PASS');
            
            
        try{

            const info = await emailer.sendMail(mailoption_token)
            console.log(info)
        }
        catch(error){
            console.log(error)
            throw createHttpError(500,error.message) 
        }
        
}


export  {emailer,sendToken_email};  