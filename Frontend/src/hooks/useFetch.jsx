import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useFetch = (url) => {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
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
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { userdata, loading, error, refetch: fetchData };
};

export default useFetch;
