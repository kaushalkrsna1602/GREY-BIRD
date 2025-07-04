import express from "express"
import cors from "cors";
import {clerkMiddleWare} from "@clerk/express"

import userRoutes from "./routes/user.route.js"

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleWare());

app.get("/", (req , res) => console.log("Hello from server"))

app.use("/api/user" , userRoutes)


const startServer = async () => {
  try {
    await connectDB();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();



app.listen(ENV.PORT, () => console.log("server is running on port " + ENV.PORT))