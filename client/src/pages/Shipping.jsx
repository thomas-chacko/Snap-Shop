import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { addShippingAddress } from "../services/API";

const Shipping = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Destructuring userDetails object
    const { name, address, city, pincode, phone } = userDetails;

    // Checking if any of the required fields are empty
    if (!name || !address || !city || !pincode || !phone) {
      alert("Please enter all details");
    } else {
      // Retrieving the user token from sessionStorage
      const token = JSON.parse(sessionStorage.getItem("user"));

      // Checking if the user is logged in
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        };

        // Calling the addShippingAddress function with userDetails and reqHeader
        const result = await addShippingAddress(userDetails, reqHeader);
        console.log(result);
        navigate("/orderplaced");
      } else {
        // Alerting the user to login first if not logged in
        alert("Please login first");

        // Navigating to the login page
        navigate("/login");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Helmet>
          <title>Shipping</title>
        </Helmet>
        <div className="flex flex-col items-center justify-center px-6 mt-10 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Shipping Address
              </p>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Full Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Address
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  name="address"
                  value={userDetails.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  City
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  name="city"
                  value={userDetails.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Pin Code
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  name="pincode"
                  value={userDetails.pincode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Phone
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleChange}
                />
              </div>
              <button
                className="w-full bg-green-500 text-white px-4 py-1.5 rounded-md"
                type="submit"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Shipping;
