import { useState } from "react";

const SignUp = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control the modal visibility

  const handleClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  if (!isModalOpen) {
    return null; // If modal is closed, render nothing
  }

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center"
      style={{ zIndex: 2 }}
    >
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-bold">
            Let’s learn, share & inspire each other with our passion for computer engineering.{" "}
            <span className="text-blue-500">Sign up now 🤘🏼</span>
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Toggle Buttons */}
        <div className="px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            {isSignup ? "Create Account" : "Sign In"}
          </h3>
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-500 hover:underline"
          >
            {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>

        {/* Form Section */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Side Form */}
            <div>
              {isSignup && (
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border rounded p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border rounded p-2 w-full"
                  />
                </div>
              )}
              <input
                type="email"
                placeholder="Email"
                className="border rounded p-2 w-full mt-4"
              />
              <div className="relative mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded p-2 w-full"
                />
                <button className="absolute top-2 right-3 text-gray-500">
                  <i className="far fa-eye"></i>
                </button>
              </div>
              {isSignup && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border rounded p-2 w-full mt-4"
                />
              )}
              <button className="w-full bg-blue-500 text-white p-2 rounded mt-4">
                {isSignup ? "Create Account" : "Sign In"}
              </button>

              <div className="flex flex-col gap-2 mt-4">
                <button className="flex items-center justify-center border p-2 rounded gap-2">
                  <img
                    src="https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg"
                    alt="Facebook"
                    className="w-5"
                  />
                  {isSignup ? "Sign Up" : "Sign In"} with Facebook
                </button>
                <button className="flex items-center justify-center border p-2 rounded gap-2">
                  <img
                    src="https://dont-copy.netlify.app/assets/google.svg"
                    alt="Google"
                    className="w-5"
                  />
                  {isSignup ? "Sign Up" : "Sign In"} with Google
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center">
              <img
                src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg"
                alt="Illustration"
                className="w-3/4"
              />
              <p className="text-gray-500 mt-4 text-center text-sm">
                By signing up, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
