import { useState,useEffect,createContext} from "react";
import axios from "axios";
export const users_context = createContext();

export function UsersProvider({children}){

    const [users,setUsers] = useState([]);
    const users_api = process.env.NEXT_PUBLIC_DB_API_USERS;
 
  


    async function getusers(){
        try{
            const users = await axios.get(`${users_api}/getallusers`,{withCredentials:true})
            setUsers(users.data)
            
        }
        catch(error){
            console.log(error.response?.data?.message || error)
        }

    }
    useEffect(()=>{
        getusers()
        
    },[])
    /*useEffect(() => {
    console.log(users);
    }, [users]); */


    return(
        <users_context.Provider value={{users}} >
            {children}
        </users_context.Provider>
        





    )
}