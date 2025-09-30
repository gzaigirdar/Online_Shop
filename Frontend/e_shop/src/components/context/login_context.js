import { createContext,useState } from "react";
import axios from "axios";

export const Login = createContext()


export function LoginProvider ({children}) {
    
    const [logged,setStatus] = useState(false);
    const [userInfo,setInfo] = useState({
        "user_id":" ",
        "email": " ",
        "auth_token":" "
})
    
    function changeStatus(bool_value){
        setStatus(bool_value);

    }
    async function createAccount(username,fname,lname,email,password){
        try{
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
        } catch(e){
           
            return e.message;
        }
    }

    async function signin(emailz,password){
        try{
        const res = await axios.post('http://localhost:5000/log/login',
         {
             'email':emailz,
             'password':password,
         }, );


         const {message,token,user_id,email} = res.data;
         console.log(message)
         console.log(user_id)
         setInfo({
                 auth_token:token,
                 user_id: user_id,
                 email: email
         })
         if (message == 'success'){
            
            setStatus(true)
            return 'success';
         }
        } catch(e){
            console.log(e)
            return e.message;
        }
        

    }
  
    return ( 
        <Login.Provider value={{logged,changeStatus,userInfo,signin,createAccount}}>
            {children}
        </Login.Provider>
     );
}

