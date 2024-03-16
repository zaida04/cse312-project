import { Request, Response } from "express";
import mongoose from "mongoose";
import { filterInput } from "../utils/filterInput";

interface UpdateOptions {
    outputKey: string;
    inputFields?: string[];
    outputFields?: string[];
}
export function createUpdateById(model: mongoose.Model<any>, options: UpdateOptions) {
    return async (request: Request, response: Response) => {
        try {
            const updateId = request.params.id;
            const filteredBody = options.inputFields ? filterInput(request.body, options.inputFields) : request.body;
            const updatedDocument = await model.findByIdAndUpdate(updateId, filteredBody, { new: true });

            if (!updatedDocument) {
                return response.status(404).json({
                    error: true,
                    message: "Not found."
                });
            }

            const filteredOutput = options.outputFields ? filterInput(updatedDocument.toObject(), options.outputFields) : updatedDocument;

            return response.status(200).json({
                error: false,
                [options.outputKey]: filteredOutput
            });
        } catch (error) {
            console.error('Error updating document:', error);

            return response.status(500).json({
                error: true,
                message: 'Failed to update document',
                detail: (error as Error).message
            });
        }
    }
}
