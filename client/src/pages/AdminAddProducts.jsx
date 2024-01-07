import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../services/API";

const AdminAddProducts = () => {
  const navigate = useNavigate();
  const adminAccess = JSON.parse(sessionStorage.getItem("user"));
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
    stocks: "",
    rating: "",
    totalreviews: "",
    description: "",
  });

  useEffect(() => {
    if (!adminAccess || !adminAccess.isAdmin) {
      navigate("/");
    }
  }, [adminAccess, navigate]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const {
      name,
      brand,
      category,
      price,
      image,
      stocks,
      rating,
      totalreviews,
      description,
    } = product;

    if (
      !name ||
      !brand ||
      !category ||
      !price ||
      !image ||
      !stocks ||
      !rating ||
      !totalreviews ||
      !description
    ) {
      alert("fill the form completely");
    } else {
      // get the token from the sessionstorage
      const token = JSON.parse(sessionStorage.getItem("user"));
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      };

      const result = await addNewProduct(product, reqHeader);
      console.log(result);
      if (result.status === 200) {
        alert("product added successfully");
      } else {
        alert("error creating product");
      }
    }
  };

  return (
    <>
      <div className="mt-10 shadow-lg w-[900px] my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className=" p-6 grid grid-cols-2 gap-6">
            <div className="flex justify-between items-center gap-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5"
                type="text"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>{" "}
            <div className="flex justify-between items-center gap-5 pt-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Brand
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5"
                type="text"
                value={product.brand}
                onChange={(e) =>
                  setProduct({ ...product, brand: e.target.value })
                }
              />
            </div>{" "}
            <div className="flex justify-between items-center gap-5 pt-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5"
                type="text"
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              />
            </div>{" "}
            <div className="flex justify-between items-center gap-5 pt-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Price
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5"
                type="text"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>{" "}
            <div className="flex justify-between items-center gap-5 pt-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Image
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5"
                type="text"
                value={product.image}
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.value })
                }
              />
            </div>{" "}
            <div className="flex justify-between items-center gap-5 pt-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Stocks
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5"
                type="text"
                value={product.stocks}
                onChange={(e) =>
                  setProduct({ ...product, stocks: e.target.value })
                }
              />
            </div>{" "}
            <div className="flex justify-between items-center gap-5 pt-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Rating
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5"
                type="text"
                value={product.rating}
                onChange={(e) =>
                  setProduct({ ...product, rating: e.target.value })
                }
              />
            </div>{" "}
            <div className="flex justify-between items-center gap-5 pt-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Total Reviews
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5"
                type="text"
                value={product.totalreviews}
                onChange={(e) =>
                  setProduct({ ...product, totalreviews: e.target.value })
                }
              />
            </div>{" "}
            <div className="flex justify-between items-center gap-5 pt-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5 resize-none"
                rows="4"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <button
            onClick={handleAddProduct}
            className="bg-green-600 text-white w-52 mx-auto py-2 rounded-md mb-5"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default AdminAddProducts;
