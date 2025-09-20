function EditProd() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-[700px] max-w-[95%] bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-2xl text-center py-2 font-bold text-gray-800 mb-4">
            Product Information
          </h2>

          <form className="space-y-4">
            {/* Product Name */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-medium" htmlFor="name">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter product name"
                className="flex-1 px-2 py-1.5 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Type */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-medium" htmlFor="type">
                Type
              </label>
              <select
                id="type"
                name="type"
                className="flex-1 px-2 py-1.5 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select type</option>
                <option value="cake">Cake</option>
                <option value="pastries">Pastries</option>
                <option value="drinks">Drinks</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-medium" htmlFor="quantity">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Enter quantity"
                className="flex-1 px-2 py-1.5 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <label className="w-32 flex-shrink-0 text-black font-medium" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter price"
                step="0.01"
                className="flex-1 px-2 py-1.5 border rounded-md border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
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

export default EditProd;
