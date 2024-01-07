import { useState } from "react";
import { registerApi } from "../services/API";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = userDetails;
    if (!name || !email || !password) {
      toast.warn("Please Enter All fileds !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const result = await registerApi(userDetails);
      if (result.status === 201) {
        toast.success(`${result.data.name} Registered Successfully`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setUserDetails({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        toast.error(result.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="pt-10 pb-10">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </p>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  placeholder="JohnDoe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="name"
                  name="name"
                  type="text"
                  value={userDetails.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="john@gmail.com"
                  id="email"
                  name="email"
                  type="email"
                  value={userDetails.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="password"
                  id="password"
                  name="password"
                  type="password"
                  value={userDetails.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="w-full bg-green-500 text-white px-4 py-1.5 rounded-md"
                type="submit"
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Register;
