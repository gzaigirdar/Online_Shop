'use client'
import axios from "axios";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

const schema = z.object({
  email: z.string().email({ message: "invalid email" })
});

function ForgotForm() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  async function req_reset(email) {
    await axios.post('http://localhost:5000/log/forgetpassword', { email });
  }

  async function submit(data) {
    const { email } = data;
    try {
      await req_reset(email);
      setSuccess('Please check your email for a link to reset your password');
      setError('');
    } catch (e) {
      setError(e.response?.data?.message || e.message);
      setSuccess('');
    }
  }

  return (
    <div className="relative bg-gray-900 h-screen overflow-auto w-screen p-10">
      <h1 className="pt-5 text-4xl text-center mb-5 text-white">Forgot Password</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="max-w-md mx-auto p-5 bg-gray-900 shadow-lg rounded-md">
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
            {errors.email && <p className="text-red-700">{errors.email.message}</p>}
          </div>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          {success && <p className="text-green-500 mb-3">{success}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotForm;
