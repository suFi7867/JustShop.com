const mongoose = require("mongoose");

const connect  = async ()=>{
 return mongoose.connect(process.env.DB_URL);

}

module.exports = connect;