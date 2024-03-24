import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import "./db/connect_mongo";

import userRouter from './routes/users';
import postRouter from './routes/Post';

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(userRouter);
app.use(postRouter);

app.listen(PORT, async () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});