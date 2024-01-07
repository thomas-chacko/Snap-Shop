import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../services/API";
import { ToastContainer, toast } from "react-toastify";
import {Helmet} from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;

    if (!email || !password) {
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
      try {
        var result = await loginApi(userDetails);
        if (result.status === 201) {
          console.log(result);
          toast.success("Login succesfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          sessionStorage.setItem("user", JSON.stringify(result.data));
          setUserDetails({
            email: "",
            password: "",
          });
          navigate("/");
          window.location.reload();
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
      } catch (error) {
        console.log("Error during login:", error);
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="pt-10 pb-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Login
                </p>
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
                    type="email"
                    value={userDetails.email}
                    onChange={handleChange}
                    name="email"
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
                    type="password"
                    value={userDetails.password}
                    onChange={handleChange}
                    name="password"
                  />
                </div>
                <button
                  className="w-full bg-[#39DB4A] text-white px-4 py-1.5 rounded-md"
                  type="submit"
                >
                  Login
                </button>
                <div className="flex gap-3">
                  <p>create an account?</p>
                  <Link to={"/register"}>register</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
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
export default Login;
