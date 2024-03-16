import { Request, Response } from "express";
import mongoose from "mongoose";

export function createDeleteById(model: mongoose.Model<any>) {
    return async (request: Request, response: Response) => {
        try {
            const deleteId = request.params.id;
            const deletedDocument = await model.findByIdAndDelete(deleteId);

            if (!deletedDocument) {
                return response.status(404).json({
                    error: true,
                    message: "Not found."
                });
            }

            return response.status(200).send();
        } catch (error) {
            console.error('Error deleting document:', error);

            return response.status(500).json({
                error: true,
                message: 'Failed to delete document',
                detail: (error as Error).message
            });
        }
    }
}
