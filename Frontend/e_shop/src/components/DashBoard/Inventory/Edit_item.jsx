function Edit_item({ closeit,details}) {
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
                    type="text"
                    defaultValue={details.name}
                    className="input input-bordered w-full h-12 text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Type</td>
                <td className="flex gap-4 justify-center">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="type" value="cake" className="radio" defaultChecked={details.type == 'Cake'} />
                    Cake
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="type" value="pastries" className="radio" defaultChecked={details.type == 'Pastries'} />
                    Pastries
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="type" value="drinks" className="radio" defaultChecked={details.type == 'Drinks'} />
                    Drinks
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="type" value="other" className="radio" defaultChecked={details.type == 'Other'}/>
                    Other
                  </label>
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Price</td>
                <td>
                  <input
                    type="text"
                    defaultValue={details.price}
                    className="input input-bordered w-full h-12 text-lg"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Quanity</td>
                <td>
                  <input
                    type="text"
                    defaultValue={details.qt}
                    className="input input-bordered w-full h-12 text-lg"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <button
          onClick={() => closeit()}
          className="bg-green-950 text-white font-bold py-2 px-6 rounded hover:bg-green-800 transition"
        >
          Save
        </button>
      </div>
    );
  }
  
  export default Edit_item;
  