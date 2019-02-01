import mongoose from "mongoose";
const Schema = mongoose.Schema;
const GenreSchema= new Schema ({
    "name" : {
        type: String,
        require: true
    },
    "description":{
        type:String,
        required:true
    }
},{"collection":"genres", GenreSchema});
export default mongoose.model("genres",GenreSchema)