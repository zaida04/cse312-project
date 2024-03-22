import express = require("express");
import { IUser } from "../db/models/User";

declare module "express-serve-static-core" {
    export interface Request {
        user?: IUser;
    }
}