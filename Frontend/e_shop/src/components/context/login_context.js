import { createContext,useState } from "react";

export const Login = createContext()


export function LoginProvider ({children}) {
    const [logged,setStatus] = useState(false)
    function changeStatus(){
        if (logged){
            setStatus(false)

        }
        else{
            setStatus(true)
        }

    }
    return ( 
        <Login.Provider value={{logged,changeStatus}}>
            {children}
        </Login.Provider>
     );
}

