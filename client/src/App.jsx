import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AdminAddProducts from "./pages/AdminAddProducts";
import Shipping from "./pages/Shipping";
import OederPlaced from "./pages/OederPlaced";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:_id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/orderplaced" element={<OederPlaced />} />
        {/* for admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/addproduct" element={<AdminAddProducts />} />

        <Route
          path="*"
          element={
            <h1 className="flex h-screen justify-center items-center text-center text-3xl">
              404 Page Not Found !
            </h1>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
