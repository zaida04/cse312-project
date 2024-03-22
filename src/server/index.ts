import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import ViteExpress from "vite-express";
import "./db/connect_mongo";

import userRouter from './routes/users';
import errorHandler from "./middleware/errorHandler";

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

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
app.use(errorHandler);
app.all("*", (req, res) => {
    return res.status(404).json({
        error: true,
        message: "Resource not found",
    });
});

ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});