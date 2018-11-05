const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator=require('mongoose-unique-validator');

let surveyorSchema= new Schema({
    fname:String,
    lname:String,
    gender: {
        type:String,
        enum:["male","female"],
        required: true
    },
    email: {
        unique: true,
        type: String,
        required: true
    },
    mobile:Number,
    password:String,
    planstyle: { type: String, maxlength: 4 },
    location: String,
});

surveyorSchema.virtual('fullPlanNumber').get(function () {
    let season = getCurrentQuarter();
    
    return `${this.planstyle}/${this.location}/${season.year}/${season.quarter}/`;
});

function getCurrentQuarter() {
    const date = new Date();
    const month = date.getMonth();
    return {
        year: date.getFullYear(),
        quarter: Math.ceil(month/3)
    };
}

surveyorSchema.plugin(uniqueValidator);

module.exports=mongoose.model('surveyor', surveyorSchema);