'use client'
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Order_info } from "../context/Order_context";
import { Login } from "../context/login_context";

const addressSchema = z.object({
  street: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  state: z.string().min(1, "Required"),
  zipcode: z.string().min(5, "Invalid zipcode"),
  phone_number: z.string().min(10, "Invalid phone number"),
  email: z.string().email("Invalid email"),
});

function AddressForm({ update }) {
  const { address_info, change_address_info } = useContext(Order_info);
  const { userInfo } = useContext(Login);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      street: "",
      city: "",
      state: "",
      zipcode: "",
      phone_number: "",
      email: "",
    },
  });

  // Pre-fill form with existing address_info from context
  useEffect(() => {
    reset({
      street: address_info.street || "",
      city: address_info.city || "",
      state: address_info.state || "",
      zipcode: address_info.zipcode || "",
      phone_number: address_info.phone_number || "",
      email: userInfo?.email || "",
    });
  }, [address_info, userInfo, reset]);

  function onSubmit(data) {
    change_address_info(data);
    update();
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h1 className="text-sm text-center mb-2 text-white">Address information</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto"
      >
        {[
          { label: "Street address", name: "street", type: "text" },
          { label: "City", name: "city", type: "text" },
          { label: "State", name: "state", type: "text" },
          { label: "Zipcode", name: "zipcode", type: "text" },
          { label: "Phone Number", name: "phone_number", type: "tel" },
          { label: "Email", name: "email", type: "email" },
        ].map(({ label, name, type }) => (
          <div className="mb-1" key={name}>
            <label className="block mb-2 text-sm font-medium text-gray-200">{label}</label>
            <input
              {...register(name)}
              type={type}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors[name] && (
              <p className="text-red-500 text-xs mt-1">{errors[name]?.message}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddressForm;