import axios from "axios";

export const commonApi = async (httpRequest, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
  };

  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
