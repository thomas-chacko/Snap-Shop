import { useEffect, useReducer } from "react";
import Brands from "../components/Brands";
import News from "../components/News";
import Slide from "../components/Slide";
import ProductCard from "../components/ProductCard";
import { baseUrl } from "../services/baseUrl";
import axios from "axios";
import Loader from "../components/Loader";
import { Error } from "./Error";
import HeroSection from "../components/HeroSection";
import { Helmet } from "react-helmet";

const initialState = {
  products: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [{ loading, error, products }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`${baseUrl}/products`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Snap Shop</title>
      </Helmet>
      <News />
      <Brands />
      <div className="hidden md:block">
        <Slide />
      </div>
      <section>
        <h1 className="text-3xl text-center my-5">Feacture Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>{error}</Error>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8">
            {products?.map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
          </div>
        )}
      </section>
      <HeroSection />
    </div>
  );
};
export default Home;
