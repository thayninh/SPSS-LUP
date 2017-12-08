const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
var fs = require('fs-extra');
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

var uuid_text_submit;

/* ==============
     Post parameters Route
  ============== */
  //Create mongoDB schema
  var LupaSchema = new Schema({
    text_submit: {type:String, require:true, unique:true},
    text_config: {type:String, require:true, unique:true}
  }, {collection: 'UserData'});

  //Route for posting configuration parameters
  router.post('/config', (req, res, next) => {
    this.uuid_text_submit = req.body.text_submit;

    //Check whether or not parameters were submitted
    if(req.body.text_submit){
 
      //Receive parameters and update Schema
      var array_key = Object.keys(req.body);
      var object_param = {};
      for(let i = 0; i < array_key.length; i++){
        //Do not create data_xxx schema
        if(array_key[i].indexOf("data_") > -1){
          continue;
        }else{
          object_param[array_key[i]] = "String";
        } 
      } 
      LupaSchema.add(object_param);

      //Create a model and update to database
      var param_modem = mongoose.model('param_modem', LupaSchema);
      var params = new param_modem(req.body);
      params.save((err)=>{
        if(!err){
          //Send status message
          res.json({ success: true, message: 'Successfully uploaded'});
        }else{
          res.json({ success: false, message: 'Uploaded fail' });
        }
      });
    }else{
      res.json({ success: false, message: 'Uploaded fail' });
    }
  });

  //Route for uploading shapefile
  router.post('/upload', upload.any(), (req, res, next) => {
    //Create folder with uuid from text_config to store uploaded files
    let uuid = __dirname + '/upload/' + this.uuid_text_submit;
    fs.ensureDirSync(uuid);

    //Move all uploaded files to uuid folder
    for(let i = 0; i < req.files.length; i++){
      origin_name =  __dirname + "/upload/".concat(req.files[i].originalname);
      dest_name = __dirname + "/upload/".concat(this.uuid_text_submit) + "/" + req.files[i].originalname;
      fs.move(origin_name, dest_name, function (err) {
        if (err) {
          throw err;
        }
      });
    }
    res.json({ success: true, message: 'Successfully uploaded'});
  });

module.exports = router;

