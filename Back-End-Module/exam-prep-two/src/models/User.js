import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "mAil is required"],
  },
  username: {
    type: String,
    required: [true, "uSername is required"],
  },
  password: {
    type: String,
    required: [true, "pAssword is required"],
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;
