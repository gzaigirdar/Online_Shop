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
    
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
      >
        <h1 className="text-xl font-semibold text-white text-center mb-4">Payment Information</h1>

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
              className="p-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={field.label}
            />
            {errors[field.name] && <p className="text-red-400 text-sm">{errors[field.name]?.message}</p>}
          </div>
        ))}

        <button 
          type="submit" 
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Pay Now
        </button>
      </form>
  
  );
}

export default PaymentForm;
