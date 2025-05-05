const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId();
const courseSchema=new Schema({
    title: String,
    description: String,
    prize: Number,
    imageUrl:Number,
    creatorId:ObjectId,
}); 
const courseModel=mongoose.model("course",courseSchema);
module.exports={
    courseModel,
};