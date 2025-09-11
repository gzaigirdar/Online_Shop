function RevRating({number,id,update_rating}) {
    const name = 'star'+id
    return (  

        <>
        
           
           <label onClick={()=>update_rating(id)}  className={`${ number >= id ? "text-yellow-400" : "text-gray-200"} text-2xl cursor-pointer hover:scale-110`}>★</label>

         
        
        
        </>
    );
}

export default RevRating;