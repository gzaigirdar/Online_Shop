import { useRef, useState,useContext } from "react";
import { Inventory_context } from "@/components/context/products_context";


function Edit_item({ closeit,details}) {
  const {edit_product} = useContext(Inventory_context)
  
  const [data,updateData] = useState(details)
 
  

  function handler(e){
    const{name,value} = e.target;
    updateData((prev)=> ({...prev,[name]:value}));

  }
  async function submit(){

    try {
      await edit_product(data);
    } catch (e) {
      console.log(e)
    }
  
    closeit()

  }

  return (
    <div className="flex justify-center items-center bg-gray-200 text-gray-900">
      <div className="rounded-md relative shadow-2xl p-3 bg-white w-full">
        
        <div className="py-1">
          <div className="text-center text-xl font-bold">PRODUCT</div>
          <div className="text-center text-xs font-bold">Edit product details</div>
        </div>
        
        <div className="text-center text-xs font-bold mb-1">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>

        <div className="text-xs pl-2 space-y-2">
          <div className="flex items-center">
            <span className="font-semibold w-1/4">Name:</span>
            <input
              onChange={handler}
              type="text"
              name="name"
              defaultValue={data.name}
              className="border border-black rounded p-1.5 w-3/4 text-gray-900 text-xs focus:outline-none"
            />
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/4">Price:</span>
            <input
              onChange={handler}
              type="text"
              name="price"
              defaultValue={data.price}
              className="border border-black rounded p-1.5 w-3/4 text-gray-900 text-xs focus:outline-none"
            />
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/4">Qty:</span>
            <input
              onChange={handler}
              type="text"
              name="quantity"
              defaultValue={data.quantity}
              className="border border-black rounded p-1.5 w-3/4 text-gray-900 text-xs focus:outline-none"
            />
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-1/4">Img Link:</span>
            <input
              onChange={handler}
              type="text"
              name="img_link"
              defaultValue={data.img_link}
              className="border border-black rounded p-1.5 w-3/4 text-gray-900 text-xs focus:outline-none"
            />
          </div>
        </div>

        <div className="border-double border-t-4 border-b-4 border-gray-900 my-3">
          <div className="text-xs pl-2 py-2">
            <span className="font-semibold">Type:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              <label className="flex items-center gap-1 cursor-pointer">
                <input onChange={handler} type="radio" name="type" value="cake" checked={data.type.toLowerCase() == 'cake'} />
                <span className="text-xs">Cake</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input onChange={handler} type="radio" name="type" value="pastries" checked={data.type.toLowerCase() == 'pastries'} />
                <span className="text-xs">Pastries</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input onChange={handler} type="radio" name="type" value="drinks" checked={data.type.toLowerCase() == 'drinks'} />
                <span className="text-xs">Drinks</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input onChange={handler} type="radio" name="type" value="other" checked={data.type.toLowerCase() == 'other'}/>
                <span className="text-xs">Other</span>
              </label>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={submit}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-1.5 px-6 rounded transition duration-200 text-sm"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit_item;