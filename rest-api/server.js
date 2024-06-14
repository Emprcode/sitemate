import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./src/router/IssuesRouter.js";
import { connectDb } from "./src/config/MongoConfig.js";

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//database
connectDb();

//router
app.use("/api/v1/issues", router);

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.errorCode || 404;

  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server running at http://localhost:${PORT}`);
});
