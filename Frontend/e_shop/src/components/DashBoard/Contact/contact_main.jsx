import { useContext } from "react";
import { InquiryContext } from "@/components/context/inquiry_context";
import ContactRow from "./contact_row";
function ContactMain() {
  const{inquiries} = useContext(InquiryContext);


  

    return ( 
        <>
          <div className="flex flex-col justify-center items-center bg-gray-900 mx-2 mb-2 rounded-lg font-extrabold font-stretch-75%">
            <h1 className="text-2lg text-red-500 text-shadow-2xs"> MESSAGES </h1>
            

          </div>
        <div className="shadow overflow-x-auto rounded border border-gray-200 overflow-y-auto max-h-[300px] mx-2">
          <table className="min-w-full bg-white table-auto">
            <thead className="bg-gray-800 text-white sticky top-0 z-10">
              <tr>


                <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Email</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">username</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Actions</th>



              </tr>
            </thead>
            <tbody className="text-gray-700 ">
              
              {
              inquiries.map((inquiry) => (
               
                  <ContactRow inquiry={inquiry} />

                ))
              }
              
             
             
              
              
              
              
              
              
              
              
             
             
              {/* more rows... */}
            </tbody>
          </table>
         
        </div>
        
        </>
     );
}

export default ContactMain;