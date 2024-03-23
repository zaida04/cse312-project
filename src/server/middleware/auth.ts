import { NextFunction, Request, Response } from "express";
import Session from "../db/models/Session";
import User from "../db/models/User";

export const auth_middleware = async (req: Request, res: Response, next: NextFunction) => {
    const cookieToken = req.cookies.token;
    if (!cookieToken) return res.status(403).json({
        error: true,
        message: "Missing auth token."
    });

    const session = await Session.findOne({ token: cookieToken });
    if (!session) return res.status(403).json({
        error: true,
        message: "Cannot find session"
    });

    const user = await User.findById(session.user_id);
    if (!user) return res.status(403).json({
        error: true,
        message: "Cannot find user."
    });

    req.user = user;
    next();
};

export const require_login = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.json(403).json({
        error: true,
        message: "Must be logged in to access this resource."
    })
}