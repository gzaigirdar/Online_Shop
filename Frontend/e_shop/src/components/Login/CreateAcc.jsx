function CreateAccount() {
    return (
      <>
        <div className="relative bg-gray-900 h-screen overflow-auto w-screen p-10">
          <h1 className="pt-5 text-4xl text-center mb-5 text-white">Create Your Account</h1>
  
          <form className="max-w-md mx-auto p-5 bg-gray-900 shadow-lg rounded-md">
          <div className="mb-5">
              <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-white">
                User Name
              </label>
              <input
                type="text"
                id="Username"
                placeholder="UserName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
           
            <div className="mb-5">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
  
            {/* Last Name */}
            <div className="mb-5">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
  
            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
  
            {/* Password */}
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
  
            {/* Confirm Password */}
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter your password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
            >
              Create Account
            </button>
          </form>
  
          <div className="mt-10 text-white text-center">
            <p className="text-gray-400 mb-3">
              Already have an account?{" "}
              <a href="#" className="underline text-blue-600 hover:text-blue-900">
                Login here
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
  
  export default CreateAccount;
  