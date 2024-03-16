import { Request, Response } from "express";
import mongoose from "mongoose";

interface RetrieveOptions {
    outputKey: string;
    outputFields?: string[];
}
export function createRetrieveById(model: mongoose.Model<any>, options: RetrieveOptions) {
    return async (request: Request, response: Response) => {
        const retrieve_id = request.params.id;
        const retrieved = await model.findById(retrieve_id);

        if (!retrieved) {
            return response.json({
                error: true,
                message: "Not found."
            })
        }

        const filtered = options.outputFields ? options.outputFields.reduce((acc, field) => {
            return {
                ...acc,
                [field]: retrieved[field]
            }
        }, {}) : retrieved;

        return response.json({
            error: false,
            [options.outputKey]: filtered
        })
    }
}