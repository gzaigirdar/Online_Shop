import { useState,useEffect,createContext} from "react";
import { mockGetUsers,mockChangeStatus,mockDeleteUser,mockAdminChangePassword} from "../Mockdata_services/UserService/UserService";
import axios from "axios";
export const users_context = createContext();

export function UsersProvider({children}){

    const [users,setUsers] = useState([]);
    const users_api = process.env.NEXT_PUBLIC_DB_API_USERS;
    const mock_service = process.env.NEXT_PUBLIC_MOCK_SERVICE;
  
    
 
  


    async function getusers(){
        try{
            if(mock_service === 'true'){
                const users = await mockGetUsers()
                setUsers(users)

            }
            else{

                const users = await axios.get(`${users_api}/getallusers`,{withCredentials:true})
                setUsers(users.data)
            }
            
        }
        catch(error){
            console.log(error.response?.data?.message || error)
        }

    }

    async function changeStatus(data){
        try {
            if(mock_service === 'true'){
                await mockChangeStatus()
            }
            else{
                await axios.patch(`${users_api}/changeStatus`,data,{withCredentials:true})

            }
            await getusers()
        } catch (error) {
            return error;
            
        }
    }

    async function deleteuser(id){
        try {
            if(mock_service === 'true'){
                await mockDeleteUser(id)
            }
            else{
                const res = await axios.delete(`${users_api}/deleteUser/${id}`)

            }
            await getusers();
        } catch (error) {
            return error;
            
        }

    }

    async function admin_change_password(data){
        try {
            if(mock_service === 'true'){
                const res = await mockAdminChangePassword(data)
            }
            else{
                const res = await axios.patch(`${users_api}/updatePassbyAdmin`,data,{withCredentials:true})

            }
            
        } catch (error) {
            return error;
            
        }
    }
    useEffect(()=>{
        getusers()
        
    },[])
    /*useEffect(() => {
    console.log(users);
    }, [users]); */


    return(
        <users_context.Provider value={{users,deleteuser,changeStatus,admin_change_password}} >
            {children}
        </users_context.Provider>
        





    )
}