import { useState } from "react";
import axios from "axios";

const useCreate = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const createData = async (data) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      const response = await axios.post(url, data);
      setSuccess(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      console.error("Error creating data:", err);
    } finally {
      setLoading(false);
    }
  };

  return { createData, loading, error, success };
};

export default useCreate;
