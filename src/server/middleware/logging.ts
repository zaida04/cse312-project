import { NextFunction, Request, Response } from "express";

export default function logger(req: Request, res: Response, next: NextFunction) {
    if (["/src", "/@vite", "/@react-refresh"].some(x => req.path.startsWith(x))) {
        next();
        return;
    };

    console.log(`Request: ${req.method} ${req.url}`);
    next();
};