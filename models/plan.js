const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PlanSchema={
    title:String,
    lname:String,
    location:String,
    pnumber:String,
    use: {
        type:String,
            enum:['primary','coperate']
        },
        zone:Number,
        size: Number,
        number_of_beacons:Number,
        cost_of_nis:Number,
        cost_of_ssce:Number,
}
module.exports=mongoose.model('Plan',PlanSchema);