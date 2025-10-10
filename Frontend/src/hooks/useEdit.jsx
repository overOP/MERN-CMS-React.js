import axios from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

const useEdit = (url) => {
  const [loading, setLoading] = useState(false);

  const updateBlog = useCallback(async (updatedData) => {
      try {
        setLoading(true);
        const response = await axios.put(url, updatedData);
        if (response.status === 200) {
          toast.success("Blog updated successfully");
          return true;
        } else {
          toast.error(`Failed to update (status: ${response?.status})`);
          return false;
        }
      } catch (err) {
        console.error("Error updating blog:", err);
        toast.error("Error updating blog");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { updateBlog, loading };
};

export default useEdit;
