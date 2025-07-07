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
  age: {
    type:Number,
    require:true,
     min:[18,'should be more than 18'] ,
    max:[120,'should be less than 120']
  },
 

});

//create custom method
studentSchema.methods.getInfo=function(){
  return `im ${this.name}, and im ${this.age}`
}

//create mongoose model
const Student = mongoose.model("Student", studentSchema,'students');


//custom validation
// studentSchema.path('age').validate(function(age){
//   console.log(age);
//   return age>=18&&age<=120
  
// })


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
// console.log(await Student.find({age:19}));

//using model custom method
//get one singel student
// const singleStudent=await Student.findOne({age:21})
// console.log(singleStudent.getInfo());




try{
  await Student.create({
  name:'test1',
  age:122
})
}catch(err){
  console.log(err.message);
  
}