function About_comp() {
    return (
      <div className="sm:flex  bg-gradient-to-r from-slate-100 to-slate-900 items-center max-w-screen-xl min-h-screen mx-auto">
        <div className="sm:w-1/2 p-10 flex justify-center items-center">
          <div className="image object-center text-center">
            <img src="https://i.pinimg.com/originals/c8/81/0f/c8810f01aae58f4edea38ff555f48f26.jpg" alt="About Us" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5 flex flex-col justify-center">
          <div className="text">
            <span className="text-gray-700 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-black-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
              doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About_comp;