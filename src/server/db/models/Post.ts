import mongoose, { Schema, Document } from 'mongoose';

// Define the TypeScript interface for the Post document
interface IPost extends Document {
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
}

// Define the schema for the MongoDB Post collection
const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  comments: [{
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
    author: { type: String, required: true }
  }],
  isPublished: { type: Boolean, default: false },
});

// Create the Mongoose model for the Post schema
const Post = mongoose.model<IPost>('Post', PostSchema);

export default Post;
