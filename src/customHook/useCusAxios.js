import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

axios.defaults.baseURL = "http://localhost:4000/api/v1/";

const useAxios = ({ url, method, body = null, headers = null }) => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
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
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
