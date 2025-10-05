require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./database/database");
const userRoutes = require("./Routes/userRoutes");
const postRoutes = require("./Routes/postRoutes");

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async () => {
  try {
    await connectToDatabase();
    app.use("/users", userRoutes);
    app.use("/posts", postRoutes);

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server because DB connection failed.", err);
    process.exit(1);
  }
};

start();
