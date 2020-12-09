import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please add a valid mail"],
    },
    contact: {
      type: String,
      required: [true, "Please add a contact number"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"],
    },
    username: {
      type: String,
      required: [true, "Please add username"],
    },
    password: {
      type: String,
      required: [true, "Please add password"],
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);
