import mongoose, { Schema, Document } from 'mongoose';

// Define the TypeScript interface for the Post document
export interface IPost extends Document {
  title: string;
  body: string;
  author: string;
  tags: string[];
  createdAt: Date;
  comments: {
    body: string;
    date: Date;
    author: string;
  }[];
  isPublished: boolean;
  likes: mongoose.Schema.Types.ObjectId[]; // the change for like so that I know the IDS who liked the post
}

// Define the schema for the MongoDB Post collection
const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  comments: [{
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
    author: { type: String, required: true }
  }],
  isPublished: { type: Boolean, default: false },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

// Create the Mongoose model for the Post schema
const Post = mongoose.model<IPost>('Post', PostSchema);

export default Post;
