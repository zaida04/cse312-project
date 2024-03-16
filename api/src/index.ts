import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import User from "./db/models/User";
import "./db/connect_mongo";

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(cors());
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, async () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});