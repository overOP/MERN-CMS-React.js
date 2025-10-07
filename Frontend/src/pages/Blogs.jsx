import React, { useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import BlogForm from "../components/BlogForm";
import ClipLoader from "react-spinners/ClipLoader";

const Blogs = () => {
  const [show, setShow] = useState(false);
  const API_URL = import.meta.env.VITE_BACKEND_API;
  const { userdata, loading, error, refetch } = useFetch(`${API_URL}posts/getAllBlogs`);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <ClipLoader color="#3b82f6" size={60} />
        <p className="mt-4 text-lg text-gray-600">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading blogs: {error.message}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4 p-4">
        {userdata.map((blog) => (
          <Card
            key={blog._id}
            title={blog.title}
            subtitle={blog.subTitle}
            description={blog.description}
          />
        ))}
      </div>

      <button
        onClick={() => setShow(!show)}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg"
      >
        Create Blog
      </button>

      {show && <BlogForm onClose={() => setShow(false)} onSuccess={refetch} />}
    </>
  );
};

export default Blogs;
