const { connectToDatabase } = require("../database/database");
const Blog = require("../model/blogModel");
connectToDatabase();

// Create a new blog
const createBlog = async (req, res) => {
    try {
        const { title, subTitle, description } = req.body;
        console.log("📥 Creating a new blog...")
        const newBlog = new Blog({
            title,
            subTitle,
            description,
        });
        await newBlog.save();
        return res.status(201).json({
            message: "✅ Blog created successfully.",
            data: newBlog,
        });
    } catch (error) {
        console.error("❌ Error creating blog:", error);
        return res.status(500).json({
            message: "Internal Server Error. Could not create blog.",
            error: error.message,
        });
    }
}

// get all blogs
const getAllBlogs = async (req, res) => {
  try {
    console.log("📥 Fetching all blogs...")
    const allBlogs = await Blog.find();
    if (allBlogs.length === 0) {
      return res.status(404).json({
        message: "❌ No blogs found.",
        data: [],
      });
    }
    return res.status(200).json({
      message: "✅ All blogs fetched successfully.",
      data: allBlogs,
    });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return res.status(500).json({
      message: "Internal Server Error. Could not retrieve blogs.",
      error: error.message,
    });
  }
};

// Get Single Blog
const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`📥 Fetching blog with ID: ${id}`);
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        message: "❌ Blog not found.",
      });
    }
    return res.status(200).json({
      message: "✅ Blog fetched successfully.",
      data: blog,
    });
  } catch (error) {
    console.error("❌ Error fetching blog:", error);
    return res.status(500).json({
      message: "Internal Server Error. Could not retrieve blog.",
      error: error.message,
    });
  }
}

// Update Blog
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, subTitle, description } = req.body;
        console.log(`📥 Updating blog with ID: ${id}`);
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, subTitle, description },
            { new: true }
        );
        if (!updatedBlog) {
            return res.status(404).json({
                message: "❌ Blog not found.",
            });
        }
        return res.status(200).json({
                message: "✅ Blog updated successfully.",
                data: updatedBlog,
            }
        )
    } catch (error) {
        console.error("❌ Error updating blog:", error);
        return res.status(500).json({
            message: "Internal Server Error. Could not update blog.",
            error: error.message,
        });
    }
}

// Delete Blog
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`🗑️ Deleting blog with ID: ${id}`);
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({
                message: "❌ Blog not found.",
            });
        }
        return res.status(200).json({
            message: "✅ Blog deleted successfully.",
            data: deletedBlog,
        });
    } catch (error) {
        console.error("❌ Error deleting blog:", error);
        return res.status(500).json({
            message: "Internal Server Error. Could not delete blog.",
            error: error.message,
        });
    }
}

module.exports = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog
};
