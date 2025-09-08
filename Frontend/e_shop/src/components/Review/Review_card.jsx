function Review_Card() {
  return (
    <div className="bg-gray-200 rounded-lg m-4 p-6 text-center shadow-2xl 
                    w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto 
                    transition-all duration-300">
      
      <p className="font-bold uppercase text-lg mb-2">Jane Smith</p>
      
      <p className="text-md font-light italic text-gray-700 mb-4">
        This podcast kept me on the edge of my seat. It's a must-listen for true crime enthusiasts!
      </p>
      
      <div className="flex items-center justify-center space-x-2 mt-2">
        {/* Star icons */}
        {[...Array(3)].map((_, i) => (
          <svg key={i} className="text-yellow-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default Review_Card;



