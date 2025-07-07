import mongoose from "mongoose";

// const uri='mongodb://127.0.0.1:27017/studentsDb'
const uri =
  "mongodb+srv://zarkoto23:EmdWU3pzplfVqiri@cluster0.zf4hvjl.mongodb.net/studentsDb?retryWrites=true&w=majority&appName=Cluster0";

try {
  await mongoose.connect(uri);
  console.log("sucess contection");
} catch (err) {
  console.log("cannnot connext to db");
}

// srtup mongoose Schema

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//create mongoose model
const Student = mongoose.model("Student", studentSchema,'students');

//query all data from db

const students = await Student.find();

//query with model with filet


// const studentsFilter=await Student.find({age:20})
// console.log(studentsFilter);

//insert data into db

// const newStudent=new Student({age:24,name: 'Ivo'})
// await newStudent.save()


// const createdStudent=await Student.create({

//   name:"Niki",
//   age: 19
// })
console.log(await Student.find({age:19}));


