import { commonApi } from "./axiosConfig";
import { baseUrl } from "./baseUrl";

// register api
export const registerApi = async (user) => {
  return await commonApi("POST", `${baseUrl}/users/register`, user, "");
};

// login api
export const loginApi = async (user) => {
  return await commonApi("POST", `${baseUrl}/users/login`, user, "");
};

// get all products to admin page
export const allProductsAdminApi = async (reqHeader) => {
  return await commonApi("GET", `${baseUrl}/admin/allproducts`, "", reqHeader);
};

// edit product api
export const editProductApi = async (productId, reqBody, reqHeader) => {
  return await commonApi(
    "PUT",
    `${baseUrl}/admin/editproduct/${productId}`, // path parameter
    reqBody,
    reqHeader
  );
};

// delete product api
export const deleteProduct = async (productId, reqHeader) => {
  return await commonApi(
    "DELETE",
    `${baseUrl}/admin/deleteproduct/${productId}`,
    {},
    reqHeader
  );
};

// add new product api
export const addNewProduct = async (reqBody, reqHeader) => {
  return await commonApi(
    "POST",
    `${baseUrl}/admin/addproduct`,
    reqBody,
    reqHeader
  );
};

// shipping address pass to backend
export const addShippingAddress = async (reqBody, reqHeader) => {
  return await commonApi(
    "POST",
    `${baseUrl}/shipping`,
    reqBody,
    reqHeader
  );
};

