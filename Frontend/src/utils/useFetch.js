import { useState } from "react";
import { handleError } from "utils";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  const onFetch = async ({ uri, method = "GET", body = {} }) => {
    try {
      setLoading(true);
      setSuccess(false);
      setError("");
      setData({});

      const response = await fetch(`${process.env.REACT_APP_API_URL}${uri}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method,
        ...((method === "POST" || method === "PUT") && {
          body: JSON.stringify(body),
        }),
      });
      await handleError(response);

      if (method !== "DELETE") {
        const respData = await response.json();
        setData(respData);
      }
      setSuccess(true);
    } catch (err) {
      setError(err?.message || "Ha ocurrido un error al crear un usuario");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, data, onFetch };
};

export default useFetch;
