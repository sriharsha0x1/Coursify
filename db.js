const mongoose =require("mongoose"); 

// console.log("Mongodb connected"); did in index.js in main function (if not connect then stop) 
// mongoose.connect("mongodb+srv://sriharshabhoomandla:KT0GXbrxavWlYFIo@cluster0.qjziw.mongodb.net/Skillora");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String,
});
const adminSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String,
});
const courseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    createrId:ObjectId,
});
const purchaseSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId
});
const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}