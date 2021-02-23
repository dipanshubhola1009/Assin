const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   Country : {
       type: String
   },
   Code:{
       type: String
   },
   A:{
       type: Number
   },
   B:{
       type: Number
   },
   C:{
       type: Number
   },
   D:{
       type: Number
   },
   E:{
       type: Number
   }
 
});



module.exports = mongoose.model('User',userSchema);