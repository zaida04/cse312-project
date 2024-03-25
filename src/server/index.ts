import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import ViteExpress from "vite-express";
import "./db/connect_mongo";

// middleware
import errorHandler from "./middleware/errorHandler";
import logger from "./middleware/logging";
import security from "./middleware/security";

// routers
import userRouter from './routes/users';
import likeRouter from './routes/likes';
import postRouter from './routes/posts';

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(security());
app.use(cors());
app.use(logger);

app.get("/api", (req, res) => {
    res.send("Hello World");
});
app.use(userRouter);
app.use(likeRouter);
app.use(postRouter);
app.use(errorHandler);

ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});