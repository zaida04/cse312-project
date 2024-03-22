import { NextFunction, Request, Response } from "express";

export default function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
    console.log(err.stack);
    return res.status(500).json({
        error: true,
        message: "Internal server error",
    });
}