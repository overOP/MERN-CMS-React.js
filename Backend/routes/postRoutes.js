const express = require("express");
const { getAllBlogs, createBlog, getSingleBlog, updateBlog, deleteBlog } = require("../controller/blogsController");
const router = express.Router();

router.post("/createBlog", createBlog);
router.get("/getAllBlogs", getAllBlogs);
router.get("/getSingleBlog/:id", getSingleBlog);
router.put("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;