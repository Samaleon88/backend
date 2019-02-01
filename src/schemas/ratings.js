import mongoose from "mongoose";
const Schema = mongoose.Schema;
const RatingSchema= new Schema ({
    "name" : {
        type: String,
        require: true
    },
    "description":{
        type:String,
        required:true
    },
    "age":{
    type:Number,
    required:true
    }
},{"collection":"rating", timestamps:true});
export default mongoose.model("rating",RatingSchema)