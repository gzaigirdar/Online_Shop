import { createContext,useState } from "react";
import axios from "axios";

export const Login = createContext()


export function LoginProvider ({children}) {
    const [logged,setStatus] = useState(true)
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
            console.log('function has triggered')
            console.log(res.data)
        } catch(e){
            console.log(e)
            return e.message;
        }
    }

    async function signin(email,password){
        try{
        const res = await axios.post('http://localhost:5000/log/login',
         {
             'email':email,
             'password':password,
         },{withCredentials:true});


         const {message,token} = res.data;
         if (message == 'success'){
            
            setStatus(true)
            return 'success';
         }
        } catch(e){
            console.log(e)
            return e.message;
        }
        

    }
    const [userInfo,setInfo] = useState({
        username:'fzaigirdar@yahoo.com',
        
    })
    return ( 
        <Login.Provider value={{logged,changeStatus,userInfo,signin,createAccount}}>
            {children}
        </Login.Provider>
     );
}

