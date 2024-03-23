import { Request, Response } from "express";
import mongoose from "mongoose";
import { filterInput } from "../utils/filterInput";

interface RetrieveOptions {
    outputKey: string;
    outputFields?: string[];
    populate?: string;
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

        const filtered = options.outputFields ? filterInput(retrieved, options.outputFields) : retrieved;

        return response.status(200).json({
            error: false,
            [options.outputKey]: filtered
        })
    }
}

export function createRetrieveAll(model: mongoose.Model<any>, options: RetrieveOptions) {
    return async (request: Request, response: Response) => {
        let retrieved = options.populate ? await model.find().populate(options.populate).exec() : await model.find();
        const filtered = options.outputFields ? retrieved.map((doc) => filterInput(doc, options.outputFields!)) : retrieved;

        return response.status(200).json({
            error: false,
            [options.outputKey]: filtered
        })
    }
}