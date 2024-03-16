import { Router } from "express";
import { createRetrieveById } from "../rest/retrieve";
import User from "../db/models/User";

const router = Router();

router.get("/users/:id", createRetrieveById(User, {
    outputKey: "user",
    outputFields: ["_id", "username", "email", "createdAt"]
}));

export default router;