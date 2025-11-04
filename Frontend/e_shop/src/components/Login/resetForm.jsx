'use client'
import axios from "axios";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

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

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

    async function reset(password) {
        await axios.post('http://localhost:5000/log/resetpassword', { password });
    }

    async function submit(data) {
        const { password } = data;
        try {
            await reset(password);
            setSuccess('The password has been reset. Please go to the home page to log in.');
            setError('');
        } catch (e) {
            setError(e.response?.data?.message || e.message);
            setSuccess('');
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

                <button className="w-full bg-green-300 text-black font-mono rounded-md p-2">Submit</button>
            </form>
        </div>
    );
}

export default ResetForm;
