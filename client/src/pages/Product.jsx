import axios from "axios";
import { useEffect, useReducer } from "react";
import { baseUrl } from "../services/baseUrl";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Error } from "./Error";
import Rating from "../components/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/cartSlices";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const initialState = {
  product: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Product = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();

  const { _id } = useParams();
  const [{ loading, error, product }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`${baseUrl}/products/${_id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.response.data });
      }
    };
    fetchData();
  }, [_id]);

  const handleAddToCart = () => {
    var user = sessionStorage.getItem("user");
    if (user) {
      if (product.stocks > 0) {
        Dispatch(addToCart(product));
      } else {
        toast.error("Out of stock", {
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
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <section className="text-gray-600 body-font overflow-hidden">
          <Helmet>
        <title>{product.name}</title>
      </Helmet>
          <div className="container px-5 py-5 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="sorry no image"
                className="lg:w-[420px] w-full lg:h-[450px] h-64 object-cover object-center rounded"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex mb-4">
                  <Rating
                    rating={product.rating}
                    totalreviews={product.totalreviews}
                  />
                </div>
                <p className="leading-relaxed pt-5">{product.description}</p>
                <p className="mt-2">
                  {product.stocks > 0 ? (
                    <span className="text-green-600">in stocks</span>
                  ) : (
                    <span className="text-red-600">out of stocks</span>
                  )}
                </p>
                <div className="flex mt-4">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹{product.price}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className={`flex ml-auto text-white  ${
                      product.stocks > 0 ? "bg-[#39DB4A]" : "bg-red-500"
                    } border-0 py-2 px-6 rounded-md`}
                  >
                    {product.stocks > 0 ? `Add To Cart` : "Out Of Stocks"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
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
export default Product;
