import React, { useState } from "react";
import useEdit from "../hooks/useEdit";
import { useParams } from "react-router-dom";

const Edit = ({ onClose, onSuccess }) => {
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_BACKEND_API;
  const { updateBlog, loading } = useEdit(`${API_URL}posts/updateBlog/${id}`);
  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const success = await updateBlog(formData);
    if (success) {
      onSuccess?.();
      onClose?.();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Edit Blog</h1>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter your title"
          className="border border-gray-300 rounded-md p-2 w-full mb-2"
        />
        <input
          type="text"
          name="subTitle"
          value={formData.subTitle}
          onChange={handleChange}
          placeholder="Enter your subtitle"
          className="border border-gray-300 rounded-md p-2 w-full mb-2"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter your description"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
