import { createContext,useState } from "react";
import axios from "axios";

export const Login = createContext()


export function LoginProvider ({children}) {
    const [logged,setStatus] = useState(true)
    function changeStatus(bool_value){
        setStatus(bool_value);

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
        <Login.Provider value={{logged,changeStatus,userInfo,signin}}>
            {children}
        </Login.Provider>
     );
}

