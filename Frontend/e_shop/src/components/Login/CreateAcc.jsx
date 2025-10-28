    import { useForm } from "react-hook-form";
    import { useContext,useState } from "react";
    import {z} from 'zod';
    import { zodResolver } from "@hookform/resolvers/zod";
    import { Login } from "../context/login_context";
      const schema = z.object({
      username: z.string().min(5,'username has to have more than 6 chracters'),
      fname: z.string().min(4,'first name has to have at least 4 characters'),
      lname: z.string().min(4,'last name has to have at least 4 characters'),
      email: z.string().email({message:"invalid email"}),
      password: z.string().min(5,'the password has to be 6 chracter long')
    })
    function CreateAcc({setform}) {
      const {createAccount} = useContext(Login)
      const [error, setError] = useState(null)
      const{register,handleSubmit,formState:{errors}} = useForm({resolver: zodResolver(schema)});

      async function onSubmit(data){
        const {username,fname,lname,email,password} = data;
        let res;
        try {
          res = await createAccount(username, fname, lname, email, password);
          setform(false)

          
        } catch (error) {
          console.log('the catchy block has been called')
          setError(error.message)
          console.error("Error creating account:", error.message);
        }



      }

        return (
          <>
            <div className="relative bg-gray-900 h-screen overflow-auto w-screen p-10">
              <h1 className="pt-5 text-4xl text-center mb-5 text-white">Create Your Account</h1>
      
          <form  onSubmit={handleSubmit(onSubmit)} 
          className="max-w-md mx-auto p-5 bg-gray-900 shadow-lg rounded-md" >
              <div className="mb-5">
                  <label  className="block mb-2 text-sm font-medium text-white">
                    User Name
                  </label>
                  <input
                  {...register('username')}
                    type="text"
                    id="Username"
                    placeholder="UserName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.username && <p className="text-red-700"> {errors.username.message}</p>}
                </div>
                
                <div className="mb-5">
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">
                    First Name
                  </label>
                  <input
                  {...register('fname')}
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.fname && <p className="text-red-700"> {errors.fname.message}</p>}
                </div>
                
      
                {/* Last Name */}
                <div className="mb-5">
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">
                    Last Name
                  </label>
                  <input
                  {...register('lname')}
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.lname && <p className="text-red-700"> {errors.lname.message}</p>}
                </div>
                
      
                {/* Email */}
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    id="email"
                    placeholder="name@example.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                    {errors.email && <p className="text-red-700"> {errors.email.message}</p>}
                </div>
              
      
                {/* Password */}
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                    Password
                  </label>
                  <input
                  {...register('password')}
                  
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                      {errors.password && <p className="text-red-700"> {errors.password.message}</p>}
                </div>
      
                {/* Confirm Password 
                <div className="mb-5">
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Re-enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                */}
      
                {/* Submit Button */}
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
                >
                  Create Account
                </button>
              
            </form>
      
              <div className="mt-10 text-white text-center">
              <div>{error && <span className="text-red-500 text-2xl">{error}</span>}</div>

                <p className="text-gray-400 mb-3">
                  Already have an account?{" "}
                  <a href="#" className="underline text-blue-600 hover:text-blue-900">
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </>
        );
      }
      
      export default CreateAcc;
      