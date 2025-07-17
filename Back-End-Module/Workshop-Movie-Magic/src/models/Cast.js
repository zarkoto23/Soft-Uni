import { Schema, model } from "mongoose";

const castSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required!"],
    minLength: 5,
    match: [/^[a-zA-Z0-9]+$/, "name shoudl be alphanum, and spaces only"],
  },
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  born: {
    type: String,
    minLength: 10,
    match: /^[a-zA-Z0-9]+$/,
  },
  imageUrl: {
    type: String,
    match: /https?:\/\//,
  },
});

const Cast = model("Cast", castSchema);

export default Cast;
