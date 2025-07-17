import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema({
  email: {
    type: String,
    required:true,
    unique: true,
    lowercase:true,
    match: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,

    minLength: 10,
  },
  password: {
    type: String,
    match: /^\w+$/,
    minLength: [6,'Pass shoud be atleast 6 chars'],
    trim:true,
  },
});

userSchema.virtual("rePassword")
.set(function (rePassword) {
  if (rePassword !== this.password) {
    throw new Error("passwords missmatch!");
  }
});

userSchema.pre("save", async function () {
  //Todo: fix update user bug
  this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;
