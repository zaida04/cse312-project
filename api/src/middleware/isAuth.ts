import { NextFunction, Request, Response } from "express";
import { createHash } from "crypto";
import Session from "../db/models/Session";
import User from "../db/models/User";

export const is_auth = async (req: Request, res: Response, next: NextFunction) => {
    const cookieToken = req.cookies.token;
    if (!cookieToken) return res.status(403).json({ error: { message: "Missing auth token." } });

    const hashedToken = createHash("sha256").update(cookieToken).digest("hex");
    const session = await Session.findOne({ token: hashedToken });
    if (!session) return res.status(403).json({ error: "Invalid auth token." });

    const user = await User.findById(session.user_id);
    if (!user) return res.status(403).json({ error: "Invalid auth token." });

    req.user = user;
    next();
};