'use client'

import InvRow from "./InvRow";
import { useState,useRef,useEffect} from "react";
import Edit_item from "./Edit_item";
import AddProd from "./AddProd";



function InvTable() {

        const [inv_list,setInvList] =useState([{
          "id" : "1",
          "Name": "Strawberry",
          "Type": "Cake",
          "Price": "10.99", 
          "Quanitity": "10"
      },
      {
          "id" : "2",
          "Name": "Mango",
          "Type": "Cake",
          "Price": "12.99", 
          "Quanitity": "10"
      }
      ])
      const dialogRef = useRef(null);
      // details of item that will redner with the edit form
      const [details,setDetails] =useState('');
      // state to show which form to render the dialog with
      const [formchoice,setChoice] = useState('')
      function set_form(val){
        setChoice(val)

      }
      
      useEffect(()=>{
          if(formchoice  && dialogRef.current){
            dialogRef.current.showModal()
          }
        },[formchoice])

        
      function set_form_info(data){
        setChoice(data)
      }

      const set_item_details = (info) => setDetails(info); 

      // Open modal
      const show_edit = () => {
        if (dialogRef.current) dialogRef.current.showModal();
      };
    
      // Close modal
      const close_edit = () => {
        if (dialogRef.current) dialogRef.current.close();
      };
     

      function add_prod(new_prod){
        setInvList(prev_list => [...prev_list,new_prod])

      }
      function delete_prod(prod_id){
        setInvList( prevItems => prevItems.filter(item=> item.id !== prod_id));
      }
  return (
    <>
      <div className="flex items-center justify-between w-2/3 px-4 md:px-8 max-w-full mx-auto bg-gradient-to-r from-slate-500 to-neutral-400 rounded-2xl shadow-2xl">
  {/* Title */}
  <h2 className="text-xl font-semibold text-gray-800">Products</h2>

  
  <button  className="bg-green-400 text-white text-xs font-bold px-2 py-2 hover:bg-red-600 rounded-full"
  onClick={()=> {
    setChoice('add')
    setDetails('')
  }}>
    Add New Product
  </button>

  {/* Search bar */}
  <div className="flex items-center space-x-2 w-48 sm:w-60 p-1 rounded">
    <input
      type="search"
      name="search"
      placeholder="Search"
      className="bg-white h-8 px-3 rounded-full text-sm text-black focus:outline-none border border-gray-300 shadow-sm w-full"
    />
    <button
      type="submit"
      className="flex items-center justify-center h-8 w-8 rounded-full bg-green-400 text-white shadow"
    >
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56.966 56.966"
        fill="currentColor"
      >
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  
          s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
          c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  
          s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>
    </button>
  </div>
</div>

    
      {/* Table */}
      <div className="px-4 w-sm sm:w-full md:px-8 py-4  max-w-full mx-auto ">
      <dialog
          ref={dialogRef}
          className="p-2 rounded shadow-lg max-w-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-transparent"
        >
          {formchoice === 'add' ? (
            <AddProd />
          ) : formchoice === 'edit' && details ? (
            <Edit_item closeit={close_edit} details={details} />
          ) : null}
        </dialog>
    




        
          <div className="shadow overflow-x-auto rounded border border-gray-200">
          <table className="min-w-full bg-white table-auto">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-xs">quanitity</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              
              {
                inv_list.map( 
                  item => (
                    <InvRow key={item.id} id={item.id} name={item.Name} cake_type={item.Type} 
                    price={item.Price} delete_item={delete_prod} show_edit={show_edit} 
                    quantity={item.Quanitity} set_form_info={set_form_info} set_item_details={set_item_details} />
                  )

                  

                  
                )
              }
             
             
              {/* more rows... */}
            </tbody>
          </table>
         
        </div>
 
        
        
        
        
        
      </div>
      
     
    </>
  );
}

export default InvTable;
