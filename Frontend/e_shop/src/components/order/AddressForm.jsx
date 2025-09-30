'use client'
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Order_info } from "../context/Order_context";

const addressSchema = z.object({
  street: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  state: z.string().min(1, "Required"),
  zipcode: z.string().min(5, "Invalid zipcode"),
  phone_number: z.string().min(10, "Invalid phone number"),
});

function AddressForm({ update }) {
  const { address_info, change_address_info } = useContext(Order_info);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      street: " Enter street address",
      city: "Enter city address",
      state: "ct",
      zipcode: "08806",
      phone_number: "2031111111",
    },
  });
 // built in reset function to fill the form with defualt values

  function onSubmit(data) {
    const formattedData = { ...data, zipcode: Number(data.zipcode) }; 
    console.log(formattedData);
    change_address_info(formattedData); 
    update();              
  }

  return (
    <div className="bg-gray-800 h-screen w-5/6 p-2">
      <h1 className="text-sm text-center mb-2 text-white">Address information</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto p-5 bg-gray-800 shadow-sm rounded-sm"
      >
        {[
          { label: "Street address", name: "street", type: "text" },
          { label: "City", name: "city", type: "text" },
          { label: "State", name: "state", type: "text" },
          { label: "Zipcode", name: "zipcode", type: "text" },
          { label: "Phone Number", name: "phone_number", type: "tel" },
        ].map(({ label, name, type }) => (
          <div className="mb-1" key={name}>
            <label className="block mb-2 text-sm font-medium text-gray-200">{label}</label>
            <input
              {...register(name)}
              type={type}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
