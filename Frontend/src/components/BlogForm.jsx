import React, { useState } from "react";
import useCreate from "../hooks/useCreate";
import toast from 'react-hot-toast';

const notify = () => toast.success('Blog created successfully');

const BlogForm = ({ onClose, onSuccess }) => {
  const API_URL = import.meta.env.VITE_BACKEND_API;
  const { createData, loading, error, success } = useCreate(`${API_URL}posts/createBlog`);

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      subTitle,
      description,
    };

    const result = await createData(blogData);

    if (result) {
      setTitle("");
      setSubTitle("");
      setDescription("");
      onClose();
      onSuccess();
    }
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Blog</h2>

        {error && (
          <div className="mb-3 text-red-600 text-sm">
            Error: {error.message}
          </div>
        )}
        {success && (
          <div className="mb-3 text-green-600 text-sm">
            Blog created successfully!
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="title"
            type="text"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="subTitle"
          >
            Subtitle
          </label>
          <input
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="subTitle"
            type="text"
            placeholder="Enter blog subtitle"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="description"
            rows="5"
            placeholder="Enter blog description"
            required
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
          onClick={notify}
            type="submit"
            disabled={loading}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;