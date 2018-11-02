const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let requestSchema={
    status:String,
    plans:String,
    total_beacons:Number,

    total_Beacons:Number,
    total_NIS: Number,
    total_ssce: Number,
}
module.exports=mongoose.model('request', requestSchema);