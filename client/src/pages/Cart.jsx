import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/slices/cartSlices";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const Cart = () => {
  const cartArray = useSelector((state) => state.cartReducer);
  const [itemQuantities, setItemQuantities] = useState({});

  const handleIncrement = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),
    }));
  };

  const dispatch = useDispatch();

  const cartTotal = cartArray.reduce(
    (total, item) => total + item.price * (itemQuantities[item._id] || 1),
    0
  );

  return (
    <div>
      <div className="h-scree w-full pt-8">
        <h1 className="mb-5 text-center text-2xl font-bold">My Cart</h1>
        {cartArray.length > 0 ? (
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartArray.map((item) => (
                <div
                  key={item._id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item.image}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {item.brand}, {item.category}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={() => handleDecrement(item._id)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          <FaMinus />
                        </span>
                        <small className="px-2">
                          {itemQuantities[item._id] || 1}
                        </small>
                        <span
                          onClick={() => handleIncrement(item._id)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          <FaPlus />
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">₹{item.price}</p>
                        <svg
                          onClick={() => dispatch(removeFromCart(item._id))}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">₹{cartTotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">₹20</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">{cartTotal + 20}</p>
                  <p className="text-sm text-gray-700">including GST</p>
                </div>
              </div>
              <Link
                to={"/shipping"}
                className="mt-6 w-full rounded-md bg-blue-500 py-2 px-6 font-medium text-blue-50 hover:bg-blue-600"
              >
                Pay
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center pt-28">
            <img
              className="w-[200px]"
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
