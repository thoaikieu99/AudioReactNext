import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

axios.defaults.baseURL = "https://kianai99.io.vn/api/v1";

const useAxios = ({ url, method, body = null, headers = null }) => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        dispatch(counterActions.increment());
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        dispatch(counterActions.loaded());
        setloading(false);
      });
  }, [method, url, body, headers, dispatch]);

  return { response, error, loading };
};

export default useAxios;
