const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

let OTPSchema = new Schema({
    original_url: {
        type: String,
        required: true
    },
    short_url: {
        type: Number,
        default: 0
    }
})
let con = mongoose.createConnection("mongodb+srv://supun:supun123@india-mumbai.ptqnl.mongodb.net/app?retryWrites=true&w=majority"); 
    autoIncrement.initialize(con);
OTPSchema.plugin(autoIncrement.plugin, { model: 'url', field: 'short_url' });
module.exports = mongoose.model('url', OTPSchema);
