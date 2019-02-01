import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR=10;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
"name":{
    type : String,
    require: true
},
"lastName":{
    type: String,
    require:true
},
"email":{
    type : String,
    require:true
},
"password":{
    type : String,
    require:true
}
},{"collection":"users", timestamps: true});

UserSchema.pre("save",function(next){
    var user = this;
if (!user.isModified("password"))return next();
bcrypt.genSalt(SALT_WORK_FACTOR,function (err,salt){
    if (err) return next (err);
    bcrypt.hash(user.password,salt,function(err,hash){
        if (err) return next(err);
        user.password=hash;
        next();
    })
})
})

export default mongoose.model("users",UserSchema)

