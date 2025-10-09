import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useDelete = (url, { navigateAfter = "/" } = {}) => {
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  const deleteBlog = useCallback(
    async () => {

      setDeleting(true);
      try {
        const response = await axios.delete(url);
        if (response) {
          toast.success("Blog deleted successfully");
          navigate(navigateAfter);
        } else {
          toast.error(`Failed to delete (status: ${response?.status})`);
        }
      } catch (err) {
        console.error("Error deleting blog:", err);
      } finally {
        setDeleting(false);
      }
    },
    [url, navigate, navigateAfter]
  );
  return { deleteBlog, deleting };
};

export default useDelete;
