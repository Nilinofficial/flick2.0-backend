import express from "express";
import "dotenv/config";

// routes
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";
import matchRouter from "./routes/matchRoutes";
import messageRouter from "./routes/messageRoutes";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/matches", matchRouter);
app.use("/api/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
