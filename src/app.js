import express from "express";
import "dotenv/config";

// routes
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import matchRouter from "./routes/matchRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { connectToDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/matches", matchRouter);
app.use("/api/messages", messageRouter);

connectToDB().then(() =>
  app.listen(PORT, () => console.log(`listening to PORT ${PORT}`))
);
