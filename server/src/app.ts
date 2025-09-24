import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import userRoute from "./routes/userRoutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
import passport from "passport";
import kPassport from "./middleware/passport";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(
  cors({ origin: [process.env.FRONTEND_URL as string], credentials: true })
);
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
kPassport(passport);

app.use("/", exampleRoute);
app.use("/user", userRoute);

app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.use(errorHandler);

mongoose
  .connect(DB, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });
