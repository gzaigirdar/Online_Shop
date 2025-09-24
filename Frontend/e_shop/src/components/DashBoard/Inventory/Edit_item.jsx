import { useRef, useState,useContext } from "react";
import { Inventory_context } from "@/components/context/products_context";


function Edit_item({ closeit,details}) {
  const {edit_product} = useContext(Inventory_context)
  
  const [data,updateData] = useState(details)
  console.log(data)
  

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
      <div className="flex flex-col items-center gap-4 p-4 w-full">
        <div className="mx-auto w-full rounded-box border border-base-content/5 bg-base-100 overflow-x-auto">
          <table className="table w-full text-center"> 
            <thead>
              <tr>
                <th colSpan={2} className="text-xl py-2">
                  Product Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Product Name</td>
                <td>
                  <input
                    onChange={handler}
                    type="text"
                    name="name"
                    defaultValue={data.name}
                    className="input input-bordered w-full h-12 text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Type</td>
                <td className="flex gap-4 justify-center">
                  <label className="flex items-center gap-1">
                    <input  onChange={handler} type="radio" name="type" value="cake" className="radio" checked={data.type.toLowerCase() == 'cake'} />
                    Cake
                  </label>
                  <label className="flex items-center gap-1">
                    <input onChange={handler} type="radio" name="type" value="pastries" className="radio" checked={data.type.toLowerCase() == 'pastries'} />
                    Pastries
                  </label>
                  <label className="flex items-center gap-1">
                    <input onChange={handler} type="radio" name="type" value="drinks" className="radio" checked={data.type.toLowerCase() == 'drinks'} />
                    Drinks
                  </label>
                  <label className="flex items-center gap-1">
                    <input onChange={handler} type="radio" name="type" value="other" className="radio" checked={data.type.toLowerCase() == 'other'}/>
                    Other
                  </label>
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Price</td>
                <td>
                  <input
                  onChange={handler}
                    type="text"
                    name="price"
                    defaultValue={data.price}
                    className="input input-bordered w-full h-12 text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Quanity</td>
                <td>
                  <input
                    onChange={handler}
                    type="text"
                    name="quantity"
                    defaultValue={data.quantity}
                    className="input input-bordered w-full h-12 text-lg"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <button
          onClick={submit}
          className="bg-green-950 text-white font-bold py-2 px-6 rounded hover:bg-green-800 transition"
        >
          Save
        </button>
      </div>
    );
  }
  
  export default Edit_item;
  