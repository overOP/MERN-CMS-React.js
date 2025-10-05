import React from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const Blogs = () => {
  const API_URL = import.meta.env.VITE_BACKEND_API;
  const { userdata, loading, error } = useFetch(`${API_URL}posts/getAllBlogs`);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading blogs...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading blogs: {error.message}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      {userdata.map((blog) => (
        <Card
          key={blog._id}
          title={blog.title}
          subtitle={blog.subTitle}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Blogs;
