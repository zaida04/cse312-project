import { NextFunction, Request, Response } from "express";

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err.stack);
    return res.status(500).json({
        error: true,
        message: "Internal server error",
    });
}