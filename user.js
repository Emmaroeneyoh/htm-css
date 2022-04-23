const mongoose = require('mongoose')
const schema = mongoose.Schema

const factschema = new schema({
  
    password:{
        type:String,
       
    },
    email:{
        type:String,
     
    }
}, {timestamps: true})
const Factmodel = mongoose.model('New_user',factschema)

module.exports = Factmodel