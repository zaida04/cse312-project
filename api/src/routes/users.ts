import { Router } from "express";
import { createRetrieveById } from "../rest/retrieve";
import User from "../db/models/User";
import { createInsert } from "../rest/insert";

const router = Router();

router.get("/users/:id", createRetrieveById(User, {
    outputKey: "user",
    outputFields: ["_id", "username", "email", "createdAt"]
}));

router.post("/users", createInsert(User, {
    outputKey: "user",
    inputFields: ["username", "email", "password", "salt"],
    outputFields: ["_id", "username", "email", "createdAt"]
}))

export default router;