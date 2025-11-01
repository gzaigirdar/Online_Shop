function ResetForm() {
    return (  
        
        <div className="bg-white flex flex-col items-center justify-center  px-3 py-8 rounded-md ">
            
            <h3 className="text-black"> Log in form</h3>
            <div className="bg-white my-3 flex flex-col">
            <label className="text-black "> Password </label>
            <input className='border border-gray-900 text-black' type='text'  />

            </div>
            <div className="bg-white my-3 flex flex-col">
            <label className="text-black  "> Confirm Password </label>
            <input className='border border-gray-900 text-black' type='text'  />

            </div>
            

            <div className="my-5">
                <button className="text-black font-mono text-shadow-emerald-80 text-black0 border border-gray-600 rounded-md  bg-green-300  "> Submit </button>
            </div>
        
        
        
        
        </div>    
        

)

}
export default ResetForm;
