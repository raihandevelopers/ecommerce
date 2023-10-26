import axios from "axios";

const defaultHeaders = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

export function apiClient({
  url,
  data = {},
  method = "",
  headers = {},
  noHeaders,
  ...rest
}) {
  return new Promise((resolve, reject) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken === "" || accessToken === null) {
      delete axios.defaults.headers.common["Authorization"];
    }

    axios({
      method,
      url,
      headers: {
        ...(noHeaders ? {} : defaultHeaders),
        ...headers,
      },
      data,
      ...rest,
    })
      .then(async (res) => {
        if (
          res?.response?.status === 401 ||
          res?.data?.message === "Unauthenticated"
        ) {
          // refresh api call
        }
        if (res) {
          resolve(res);
        } else {
          reject(res.data.error);
        }
      })
      .catch(async (err) => {
        reject(err);
      });
  });
}
