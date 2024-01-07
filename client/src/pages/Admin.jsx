import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allProductsAdminApi, deleteProduct } from "../services/API";
import { FaTrash } from "react-icons/fa";
import AdminProductEdit from "./AdminProductEdit";

const Admin = () => {
  const navigate = useNavigate();
  const adminAccess = JSON.parse(sessionStorage.getItem("user"));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!adminAccess || !adminAccess.isAdmin) {
      navigate("/");
    }
  }, [adminAccess, navigate]);

  const getAdminProducts = async () => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user"));

      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      };

      const result = await allProductsAdminApi(reqHeader);
      setProducts(result.data);
    }
  };

  useEffect(() => {
    getAdminProducts();
  }, []);

  const handleDelete = async (productId) => {
    const id = productId;
    const token = JSON.parse(sessionStorage.getItem("user"));
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`,
    };

    const result = await deleteProduct(id, reqHeader);

    if (result.status === 200) {
      alert("Product deleted successfully");
      window.location.reload();
    } else {
      alert("error deleting");
    }
  };

  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">All Products</h2>
          </div>
          <div>
            <Link
              to={"/admin/addproduct"}
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add New Product
            </Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Image</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Stocks
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Price
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {products?.map((item, i) => (
                      <tr key={i}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={item.image}
                                alt="no"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-700">
                            {item.name}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span
                            className={`inline-flex rounded-full ${
                              item.stocks === 0 ? "bg-red-600" : "bg-green-600"
                            } px-2 text-xs font-semibold leading-5 text-white`}
                          >
                            {item.stocks}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {item.price}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <AdminProductEdit item={item} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <FaTrash
                            onClick={() => handleDelete(item._id)}
                            size={25}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
