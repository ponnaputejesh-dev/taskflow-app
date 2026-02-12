const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

/* ---------- IMPORTANT MIDDLEWARE ORDER ---------- */
app.use(
  cors({
    origin: ["http://localhost:3000", "https://taskflow-backend-37v4.onrender.com/"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/* ---------- ROUTES ---------- */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));


/* ---------- TEST ROUTE ---------- */
app.get("/", (req, res) => {
  res.send("API Running");
});

/* ---------- SERVER ---------- */
app.listen(5000, () => console.log("Server running on port 5000"));
