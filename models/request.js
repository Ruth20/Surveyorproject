const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let requestSchema= new Schema({
    surveyorId: { type: Schema.Types.ObjectId, ref: 'Surveyor', required: true },
    status: {
        type: String,
        enum: ["unpaid", "paid"],
        default: "unpaid"
    },
    plans: [ { type: Schema.Types.ObjectId, ref: 'Plan' } ],
    totalBeacons:Number,
    nisTotal: Number,
    ssceTotal: Number,
});

module.exports=mongoose.model('request', requestSchema);