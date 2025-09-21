import {useForm} from 'react-hook-form'
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


function AddProd({closeit}) {

  const schema = z.object({
       Product_name: z.string().nonempty('please enter a product name'),
       type: z.string().nonempty('please select type of product'),
       quantity: z.number().min(6,'please add the quantity of the product'),
       img_link: z.url().nonempty('please provide a link for the image of the product'),
       price: z.number().min(1,'pleae add price of the product')

       
  })
  
   const {register,handleSubmit,formState:{errors} }= useForm({resolver:zodResolver(schema)});

   function handleSub(data){
    console.log('the submit funtion has been triggered')

    console.log(data)
    closeit();


   }

  return (

    <>
      <div className="flex flex-col justify-center items-center gap-4   ">
     <div className="w-[700px] max-w-[95%]  rounded-2xl shawdow-2xl p-4 bg-gradient-to-r from-slate-300 to-slate-500">
          <h2 className="text-2xl text-center py-2 font-bold text-gray-800 mb-4">
            Product Information
          </h2>

        <form onSubmit={handleSubmit(handleSub)}  className="space-y-4">
            {/* Product Name */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-thin font-serif" htmlFor="name">
                Product Name:
              </label>

              <input
              {...register('Product_name')}
                type="text"
                id="Product_name"
              
                placeholder="Enter product name"
                className="flex-1 px-2 py-1.5 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
                {errors.Product_name && <p className='text-red-500 '> {errors.Product_name.message }</p>}
            </div>
            {/* Type */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-thin font-serif" htmlFor="type">
                Type:
              </label>
              <select
              {...register('type')}
                id="type"
                name="type"
                className="flex-1 px-2 py-1.5  bg-gradient-to-r from-slate-500 to-neutral-400 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"



>
                <option value="">Select type</option>
                <option value="cake">Cake</option>
                <option value="pastries">Pastries</option>
                <option value="drinks">Drinks</option>
                <option value="other">Other</option>
              </select>
              {errors.type && <p className='text-red-500 '> {errors.type.message }</p>}
            </div>

            {/* Quantity */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-thin font-serif" htmlFor="quantity">
                Quantity:
              </label>
              <input
              {...register('quantity',{valueAsNumber:true})}                type="number"
                id="quantity"
                name="quantity"
                placeholder="Enter quantity"
                className="flex-1 px-2 py-1.5 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
                {errors.quantity && <p className='text-red-500 '> {errors.quantity.message }</p>}
            </div>

            {/* Price */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-thin font-serif" htmlFor="price">
                Price:
              </label>
              <input

                {...register('price',{valueAsNumber:true})}
                type="number"
                id="price"
                name="price"
                placeholder="Enter price"
                step="0.01"
                className="flex-1 px-2 py-1.5 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.price && <p className='text-red-500 '> {errors.price.message }</p>}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-thin font-serif" htmlFor="price">
                Image Link:
              </label>
              <input
              {...register('img_link')}

                type="text"
                id="price"
                name="img_link"
                placeholder="Enter price"
                step="0.01"
                className="flex-1 px-2 py-1.5 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
                {errors.img_link && <p className='text-red-500 '> {errors.img_link.message }</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
               
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProd;
