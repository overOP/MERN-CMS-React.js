import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetchSingle = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(url);
      const payload = res.data.data;
      setData(payload);
    } catch (err) {
      setError(err);
      console.error("Error fetching single resource:", err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchSingle;
