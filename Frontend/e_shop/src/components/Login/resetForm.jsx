'use client'
import axios from "axios";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation';

import { BeatLoader } from "react-spinners";
const schema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
    confirmed_password: z.string()
}).refine((data) => data.password === data.confirmed_password, {
    message: "Password doesn't match",
    path: ["confirmed_password"]
});

function ResetForm() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {token} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
    const router = useRouter();
    const [loading,setloading] = useState(false);

    async function reset(password) {
        await axios.post('http://localhost:5000/log/resetPassword', { password:password,token:token });
    }

    async function submit(data) {
        if(loading) return;
        setloading(true)
        const { password } = data;
        try {
          await reset(password);
          setSuccess('The password has been reset. Redirecting to home page to log in');
          setError('');
      
          setTimeout(() => {
            router.push('/');
          }, 5000); 
      
        } catch (e) {
          setError(e.response?.data?.message || e.message);
          setSuccess('');
        } finally{
            setloading(false)
        }
      }

    return (
        <div className="bg-white flex flex-col items-center justify-center px-3 py-8 rounded-md">
            <form onSubmit={handleSubmit(submit)}>
                <h3 className="text-black mb-5">Reset Password</h3>

                <div className="mb-3">
                    <label className="text-black">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password', { required: true })}
                        className="border border-gray-900 text-black rounded p-2 w-full"
                    />
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                </div>

                <div className="mb-3">
                    <label className="text-black">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register('confirmed_password', { required: true })}
                        className="border border-gray-900 text-black rounded p-2 w-full"
                    />
                    {errors.confirmed_password && <p className="text-red-600">{errors.confirmed_password.message}</p>}
                </div>

                {error && <p className="text-red-600 mb-3">{error}</p>}
                {success && <p className="text-green-600 mb-3">{success}</p>}

                <button disabled={loading} className="w-full bg-green-300 text-black font-mono rounded-md p-2">Submit</button>
                {loading && <BeatLoader size={20} color='green' /> }
            </form>
        </div>
    );
}

export default ResetForm;
