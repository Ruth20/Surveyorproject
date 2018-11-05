const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PlanSchema= new Schema({
    requestId: { type: Schema.Types.ObjectId, required: true },
    title:String,
    location:String,
    planNumber:String,
    landUse: {
        type:String,
        enum: ['private','corporate']
    },
    zone: Number,
    landSize: Number,
    numBeacons: Number,
    nisCost: Number,
    ssceCost: Number,
    mandatoryDeposit: Number
});


module.exports=mongoose.model('Plan',PlanSchema);