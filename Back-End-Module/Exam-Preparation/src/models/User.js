import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is REQUIRED!"],
  },
  username: {
    type: String,
    required: [true, "username is REQUIRED!"],
  },
  password: {
    type: String,
    required: [true, "pass is REQUIRED!"],
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;
