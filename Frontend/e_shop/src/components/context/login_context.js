import { createContext,useState } from "react";

export const Login = createContext()


export function LoginProvider ({children}) {
    const [logged,setStatus] = useState(false)
    function changeStatus(bool_value){
        setStatus(bool_value);

    }
    const [userInfo,setInfo] = useState({
        username:'fzaigirdar@yahoo.com',
        password:'cricket09'
    })
    return ( 
        <Login.Provider value={{logged,changeStatus,userInfo}}>
            {children}
        </Login.Provider>
     );
}

