'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { Order_info } from "../context/Order_context";

const paymentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  cardNumber: z.string().regex(/^4[0-9]{12}(?:[0-9]{3})?$/, "Invalid card number"),
  card_exp: z.string().regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Invalid expiration date"),
  card_csv: z.string().min(3, "CVV must be 3-4 digits").max(4),
});

function PaymentForm({ closeform }) {
  const { change_payment_info } = useContext(Order_info);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      name: "", 
      cardNumber: "4111111111111111",
      card_exp: "12/25",
      card_csv: "123",
    },
  });

  const onSubmit = (data) => {
    change_payment_info(data);
    closeform(data);
  };

  return (
    
      <div className="bg-gray-800 rounded-lg p-4">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="max-w-sm mx-auto space-y-4"
      >
        <h1 className="text-sm text-center mb-2 text-white">Payment Information</h1>

        {[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Card Number", name: "cardNumber", type: "text" },
          { label: "Expiry (MM/YY)", name: "card_exp", type: "text" },
          { label: "CVV", name: "card_csv", type: "text" },
        ].map(field => (
          <div key={field.name} className="flex flex-col">
            <label className="text-sm font-medium text-gray-200 mb-1">{field.label}</label>
            <input
              type={field.type}
              {...register(field.name)}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder={field.label}
            />
            {errors[field.name] && <p className="text-red-400 text-sm">{errors[field.name]?.message}</p>}
          </div>
        ))}

        <button 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Pay Now
        </button>
      </form>
      </div>
  
  );
}

export default PaymentForm;
