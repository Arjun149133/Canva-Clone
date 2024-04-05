import { Schema, model, models } from "mongoose";

export interface IUser {
  email: string;
  username: string;
  clerkId: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: string;
  creditBalance: number;
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  clerkId: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: String, default: 1 },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
