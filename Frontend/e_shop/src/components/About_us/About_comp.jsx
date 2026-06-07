function About_comp() {
    return (
      <div className="flex flex-col-reverse sm:flex-row bg-gradient-to-r from-slate-100 to-slate-900 items-center max-w-screen-xl min-h-screen mx-auto">
        <div className="sm:w-1/2 p-8 flex justify-center items-center">
          <div className="image object-center text-center ">
            <img src="https://i.pinimg.com/originals/c8/81/0f/c8810f01aae58f4edea38ff555f48f26.jpg" alt="About Us" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5 flex flex-col justify-center">
          <div className="text">
            <span className="text-gray-700 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-500">Our Company</span>
            </h2>
            <p className="text-gray-200 font-mono text-sm bg-gray-900 p-4 rounded-2xl shadow-2xl">
              Welcome to Sweet Crumbs Bakery, where every day begins with the aroma of freshly baked bread and handcrafted pastries. Founded in 2018, our neighborhood bakery was built on a simple idea: bringing people together through delicious, made-from-scratch baked goods.

            From flaky croissants and artisan breads to custom cakes and seasonal treats, we use carefully selected ingredients and traditional baking techniques to create products that taste as good as they look. Whether you're stopping by for your morning coffee, picking up a birthday cake, or treating yourself to something sweet, we're dedicated to making every visit special.

            Our team of passionate bakers starts before sunrise to ensure that everything is fresh and ready for our community each day. We take pride in serving our local customers and creating a warm, welcoming space where friends and families can gather.

            Thank you for making Sweet Crumbs Bakery part of your day. We look forward to baking for you for years to come.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About_comp;