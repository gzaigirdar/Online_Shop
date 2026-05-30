import { users_context } from "@/components/context/user_context";
import { useRef,useState,useContext } from "react";
import {z} from 'zod';

function UpdatePassword({id,name}) {
      const{admin_change_password} = useContext(users_context);
      const schema = z.string().min(6,'the password has to be 6 chracter long')
      const {fname,lname} = name;

      const password = useRef(null);
      const [error,setError] = useState(null);
      const[msg,setMsg] = useState(null);
            
      async function handleSubmit(){
        let pass_value = password.current.value;
        try {
          setError(null)
          const passCheck = schema.parse(pass_value)
          console.log(passCheck)
          try {
            const data = {'id':id,
                          'password':pass_value
            }
            await admin_change_password(data);
            setMsg('Password has been changed for this user!')
            
          } catch (error) {
            setError(error.response?.data?.message || 'password change failed')
            
          }
          
        } catch (err) {
          setError(err.issues[0].message);

          
        }
      }


  return (

        <div className="w-72 rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-sm font-semibold text-gray-900">{fname + ' ' + lname  }</h3>
      
    </div>

    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
      Reset
    </span>
  </div>

  <div className="mt-4">
    <label className="mb-1 block text-xs font-medium text-gray-600">
      New Password
    </label>

    <input
      ref={password}
      type="password"
      placeholder="Enter new password"
      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    />
  </div>
  <div>
    {error && <p className="text-red-700"> {error} </p>}
    {msg && <p className="text-green-700"> {msg} </p>}
  </div>

  <button
  onClick={handleSubmit}
    className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
  >
    Reset Password
  </button>
</div>
      );
}

export default UpdatePassword;