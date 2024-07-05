const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const bodyParser = require("body-parser");
const createUser = require("./src/user/register");
const loginUser = require("./src/user/login");

const app = express();

// CORS configuration
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(createUser);
app.use(loginUser);
// Upload APIs

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is running on port ${port}`));
