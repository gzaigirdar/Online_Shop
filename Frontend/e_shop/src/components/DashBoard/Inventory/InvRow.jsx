function InvRow() {
    return ( 
        <>


            <tr className="bg-gray-50">
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">Johnson</td>
                <td className="py-3 px-4">Furniture</td>
                <td className="py-3 px-4">17</td>
                <td className="py-3 px-4 space-x-2">
                  <button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded">Edit</button>
                  <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded">Delete</button>
                </td>
              </tr>
      
      </>
     );
}

export default InvRow;