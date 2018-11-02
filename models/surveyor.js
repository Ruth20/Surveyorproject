const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let surveyorSchema={
    
    fname:String,
    lname:String,
    gender:{
        type:String,
        enum:["male","female"]
    },
    email:String,
    mobile:Number,
    password:String,
    planstyle: String,
    location: String,
}

module.exports=mongoose.model('surveyor', surveyorSchema);