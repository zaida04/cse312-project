import { NextFunction, Request, Response } from "express";
import Session from "../db/models/Session";
import User from "../db/models/User";
import { generateHashedValue } from "../utils/hash";

export const is_auth = async (req: Request, res: Response, next: NextFunction) => {
    const cookieToken = req.cookies.token;
    if (!cookieToken) return res.status(403).json({ error: { message: "Missing auth token." } });

    const hashedToken = generateHashedValue(cookieToken);
    const session = await Session.findOne({ token: hashedToken });
    if (!session) return res.status(403).json({ error: "Invalid auth token." });

    const user = await User.findById(session.user_id);
    if (!user) return res.status(403).json({ error: "Invalid auth token." });

    req.user = user;
    next();
};