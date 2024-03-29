const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth.js");

const app = express();
dotenv.config();

// Database Connection
const db_connect = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1); // Exit the application if unable to connect to the database
    }
};

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    db_connect();
    console.log("Server started on port", PORT);
});
