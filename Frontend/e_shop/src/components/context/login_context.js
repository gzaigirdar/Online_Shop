'use client'
import { createContext,useState } from "react";
import axios from "axios";
import { mockCreateUser, mockLogin } from "../Mockdata_services/UserService/UserService";

export const Login = createContext()


export function LoginProvider ({children}) {
    
    const [logged,setStatus] = useState(false);
    const [userInfo,setInfo] = useState({
        "user_id":" ",
        "email": " ",
        "auth_token":" "
})
    const mock_service = process.env.NEXT_PUBLIC_MOCK_SERVICE;
    
    function changeStatus(bool_value){
        setStatus(bool_value);

    }
    async function createAccount(username,fname,lname,email,password){
        try{
            if(mock_service === 'true'){
                const data =   {
                    'username':username,
                    'fname':fname,
                    'lname': lname,
                    'email':email,
                    'password':password}
            const res = await mockCreateUser(data);
        }
            else{

                const res = await axios.post('http://localhost:5000/log/createacc',
                    {
                        'username':username,
                        'fname':fname,
                        'lname': lname,
                        'email':email,
                        'password':password
    
    
                    }
                )
                
                console.log(res.data)
            }
        } catch(e){
           
            const serverMessage = e.response?.data?.message || e.message;
            throw new Error(serverMessage);
        }
    }

    async function signin(emailz,password){
        try{
        let res;
        if (mock_service === 'true'){ 
            res = await mockLogin({
                 'email':emailz,
                'password':password,
            })
        }
        else{
             res = await axios.post('http://localhost:5000/log/login',
            {
                'email':emailz,
                'password':password,
            }, );
            

        }

    
         const {message,token,user_id,email} = res.data || res;
         
         setInfo({
                 auth_token:token,
                 user_id: user_id,
                 email: email
         })
         if (message == 'success'){
            
            setStatus(true)
            return 'success';
         }
         else{
            return (res.data || res).message;
         }
        } catch(e){
            console.log(e)
            const Message = e.response?.data?.message || e.message;
            throw new Error(Message);
        }
        

    }
  
    return ( 
        <Login.Provider value={{logged,changeStatus,userInfo,signin,createAccount}}>
            {children}
        </Login.Provider>
     );
}

