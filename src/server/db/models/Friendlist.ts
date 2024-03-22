import mongoose, { Schema, Document } from 'mongoose';

// Assuming you have a User model, each friend in the FriendList will be a reference to a User document
interface IFriendList extends Document {
  userId: mongoose.Schema.Types.ObjectId; // The ID of the user who owns the friend list
  friends: mongoose.Schema.Types.ObjectId[]; // An array of user IDs representing the user's friends
  createdAt: Date; // When the friend list was created
  updatedAt: Date; // When the friend list was last updated
}

const FriendListSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

const FriendList = mongoose.model<IFriendList>('FriendList', FriendListSchema);

export default FriendList;
