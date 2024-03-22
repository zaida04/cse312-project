import { Request, Response } from "express";
import mongoose from "mongoose";
import { filterInput } from "../utils/filterInput";

interface CreateOptions {
    outputKey: string;
    inputFields?: string[];
    outputFields?: string[];
    conditionCheck?: (request: Request) => Promise<[true, null] | [false, string]>;
    additionalFields?: (request: Request) => Promise<Record<string, any>>;
}
export function createInsert(model: mongoose.Model<any>, options: CreateOptions) {
    return async (request: Request, response: Response) => {
        if (options.conditionCheck) {
            const [condition, message] = await options.conditionCheck(request);
            if (!condition) {
                return response.status(400).json({
                    error: true,
                    message
                });
            }
        }

        try {
            const filteredBody = options.inputFields ? filterInput(request.body, options.inputFields) : request.body;
            const additionalData = options.additionalFields ? await options.additionalFields(request) : {};

            // Create a new document in the database
            const createdDocument = await model.create({
                ...filteredBody,
                ...additionalData
            });
            const filteredOutput = options.outputFields ? filterInput(createdDocument, options.outputFields) : createdDocument;

            // Respond with the created document
            return response.status(201).json({
                error: false,
                [options.outputKey]: filteredOutput
            });
        } catch (error) {
            // Handle potential errors, such as validation errors or duplicate keys
            console.error('Error creating document:', error);

            return response.status(500).json({
                error: true,
                message: 'Failed to create document',
                detail: (error as Error).message
            });
        }
    }
}
