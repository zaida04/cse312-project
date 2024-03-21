import { Router } from "express";
import { createRetrieveById } from "../rest/retrieve";
import User from "../db/models/User";
import { createInsert } from "../rest/insert";
import { createDeleteById } from "../rest/delete";
import { createUpdateById } from "../rest/update";
import bcrypt from "bcryptjs";
import { createHash } from "crypto";

const router = Router();

router.get("/users/:id", createRetrieveById(User, {
    outputKey: "user",
    outputFields: ["_id", "username", "email", "createdAt"]
}));

router.get("/users/@me", (req, res) => {
    if (!req.user) return res.status(403).json({ error: "Invalid auth token." });
    return res.json({ user: req.user })
});

router.post("/users", createInsert(User, {
    outputKey: "user",
    inputFields: ["username", "email", "password", "salt"],
    outputFields: ["_id", "username", "email", "createdAt"],
    conditionCheck: async (request) => {
        const { username, email, password, confirm_password } = request.body;
        if (password !== confirm_password) {
            return [false, "Passwords do not match"]
        }

        const existing = await User.findOne({ $or: [{ username }, { email }] });
        if (existing) {
            return [false, "Username or email already in use"];
        }

        return [true, null];
    },
    additionalFields: async (request) => {
        const { password } = request.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = createHash("sha256").update(password).digest("hex");

        return { salt, password: hashedPassword };
    }
}))

router.post("/users/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const hashedAttemptPassword = createHash("sha256").update(password).digest("hex");
    if (user.password !== hashedAttemptPassword) return res.status(403).json({ error: "Invalid password" });
});

router.delete("/users/:id", createDeleteById(User));

router.patch("/users/:id", createUpdateById(User, {
    outputKey: "user",
    inputFields: ["username", "email", "password", "salt"],
    outputFields: ["_id", "username", "email", "createdAt"]
}))

export default router;