import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import useFetchSingle from "../hooks/useFetchSingle";
import SingleCard from "../components/SingleCard";
import useDelete from "../hooks/useDelete";
import Edit from "../components/Edit";

const Readmore = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_BACKEND_API;
  const { data: blog, loading, error, refetch,} = useFetchSingle(`${API_URL}posts/getSingleBlog/${id}`);
  const { deleteBlog, deleting } = useDelete(`${API_URL}posts/deleteBlog/${id}`);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <ClipLoader color="#3b82f6" size={60} />
        <p className="mt-4 text-lg text-gray-600">Loading blog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading blog: {error.message}
      </div>
    );
  }

  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4 p-4">
      <div className="col-span-1 sm:col-span-2 lg:col-span-2">
        <SingleCard
          title={blog.title}
          subtitle={blog.subTitle}
          description={blog.description}
        />
      </div>

      <div className="fixed bottom-4 right-4 flex items-center">
        <button
          onClick={() => deleteBlog()}
          disabled={deleting}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            deleting
              ? "opacity-60 cursor-not-allowed bg-red-600"
              : "bg-red-600 hover:bg-red-700"
          } text-white`}
        >
          {deleting ? "Deleting..." : "Delete"}
        </button>

        <button
          onClick={() => setShow(!show)}
          className="ml-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
        >
          Edit
        </button>
      </div>
      {show && <Edit onClose={() => setShow(false)} onSuccess={refetch} />}
    </article>
  );
};

export default Readmore;
