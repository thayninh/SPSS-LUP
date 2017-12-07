const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


/* ==============
     Post parameters Route
  ============== */
  //Create mongoDB schema
  var LupaSchema = new Schema({
    text_submit: {type:String, require:true, unique:true},
    text_config: {type:String, require:true, unique:true}
  }, {collection: 'UserData'});

  //Catch the parameters post from clients
  router.post('/config', (req, res, next) => {  
    //Check whether or not parameters were submitted
    if(req.body.text_submit){
      res.json({ success: true, message: 'Successfully uploaded'});
    }else{
      res.json({ success: false, message: 'Uploaded fail' });
    }
    
    //Receive parameters and update Schema
    var array_key = Object.keys(req.body);
    var object_param = {};
    for(let i = 0; i < array_key.length; i++){
      object_param[array_key[i]] = "String";
    } 
    LupaSchema.add(object_param);

    //Create a model and update to database
    var param_modem = mongoose.model('param_modem', LupaSchema);
    var params = new param_modem(req.body);
    params.save(); 
  });

module.exports = router;