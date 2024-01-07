import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { editProductApi } from "../services/API";
import { ToastContainer, toast } from "react-toastify";

const AdminProductEdit = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState({
    id: item._id,
    name: item.name,
    brand: item.brand,
    category: item.category,
    price: item.price,
    image: item.image,
    stocks: item.stocks,
    rating: item.rating,
    totalreviews: item.totalreviews,
    description: item.description,
  });

  const handleUpdate = async () => {
    const {
      id,
      name,
      brand,
      category,
      price,
      image,
      stocks,
      rating,
      totalreviews,
      description,
    } = products;

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
      // get the token from the sessionstorage
      const token = JSON.parse(sessionStorage.getItem("user"));
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      };

      const result = await editProductApi(id, products, reqHeader);
      if (result.status === 200) {
        toast.success("Product Updated Succesfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setShowModal(false);
        window.location.reload();
      } else {
        toast.error("error while updating!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(result);
      }
    }
  };

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <FaEdit size={25} />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-14">
            <div className="relative w-[900px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Products</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span>x</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 grid grid-cols-2 gap-6">
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
                      value={products.name}
                      onChange={(e) =>
                        setProducts({ ...products, name: e.target.value })
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
                      value={products.brand}
                      onChange={(e) =>
                        setProducts({ ...products, brand: e.target.value })
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
                      value={products.category}
                      onChange={(e) =>
                        setProducts({ ...products, category: e.target.value })
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
                      value={products.price}
                      onChange={(e) =>
                        setProducts({ ...products, price: e.target.value })
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
                      value={products.image}
                      onChange={(e) =>
                        setProducts({ ...products, image: e.target.value })
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
                      value={products.stocks}
                      onChange={(e) =>
                        setProducts({ ...products, stocks: e.target.value })
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
                      value={products.rating}
                      onChange={(e) =>
                        setProducts({ ...products, rating: e.target.value })
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
                      value={products.totalreviews}
                      onChange={(e) =>
                        setProducts({
                          ...products,
                          totalreviews: e.target.value,
                        })
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
                      value={products.description}
                      onChange={(e) =>
                        setProducts({
                          ...products,
                          description: e.target.value,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-72 p-2.5 resize-none"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleUpdate}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
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
    </>
  );
};
export default AdminProductEdit;
