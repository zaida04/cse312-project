import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Like document
export interface ILike extends Document {
    User: mongoose.Types.ObjectId[]; // Array of user references
    Post: mongoose.Types.ObjectId; // Reference to Post model
    createdAt: Date;
}

// Define schema for Like
const LikeSchema: Schema = new Schema({
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Array of user references
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create and export Like model
const Like = mongoose.model<ILike>('Like', LikeSchema);
export default Like;