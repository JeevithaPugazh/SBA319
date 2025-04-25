import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      lowercase: true,
      index: true,
      minlength: [
        3,
        "Username must be at least 3 characters long",
      ],
      maxlength: [
        30,
        "Username must be at most 30 characters long",
      ],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [
        /.+@.+\..+/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [
        8,
        "Password must be at least 8 characters long",
      ],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", usersSchema);

export default User;
