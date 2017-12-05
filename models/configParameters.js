const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

var LupaSchema = new Schema({
    rid: {type:String, require:true, unique:true},
    param:[{
        factor_name:String,
        data_name:String,
        weight:String,
        fuzzyType:String,
        aF:String,
        bF:String,
        cF:String,
        dF:String}]
});

module.exports = mongoose.model('parameters', LupaSchema);