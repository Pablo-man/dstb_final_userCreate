import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    Name: { type: String, required: true, trim: true },
    Lastname: { type: String, required: true, trim: true },
    Email: { type: String, required: true, trim: true, unique: true },
    Password: { type: String, required: true, trim: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("User", UserSchema);