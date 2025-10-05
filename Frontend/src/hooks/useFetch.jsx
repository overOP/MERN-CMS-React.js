// src/hooks/useFetch.js
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const allData = response.data.data;
        setUserdata(allData);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { userdata, loading, error };
};

export default useFetch;
