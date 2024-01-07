import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Rating from "./Rating";
import { addToCart } from "../Redux/slices/cartSlices";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    var user = sessionStorage.getItem("user");
    if (user) {
      if (item.stocks > 0) {
        dispatch(addToCart(item));
      } else {
        toast.error("Sorry Out Of Stocks !!", {
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
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="w-[300px] rounded-md border border-gray-300 shadow-lg">
        <img
          onClick={() => navigate(`/products/${item._id}`)}
          src={item.image}
          alt="Laptop"
          className="h-[300px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {item.name.slice(0, 25)}...
          </h1>
          <div>
            <Rating rating={item.rating} totalreviews={item.totalreviews} />
          </div>
          <div className="mt-4">
            <span className="mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-[15px] font-semibold text-gray-900">
              ₹{item.price}
            </span>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className={`mt-4 w-full rounded-sm ${
              item.stocks > 0 ? "bg-[#39DB4A]" : "bg-red-500"
            }  px-2 py-1.5 text-sm font-semibold text-white`}
          >
            {item.stocks > 0 ? `Add To Cart` : "Out Of Stocks"}
          </button>
        </div>
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
      />{" "}
    </div>
  );
};
export default ProductCard;
