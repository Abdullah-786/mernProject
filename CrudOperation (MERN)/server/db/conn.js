const mongoose = require("mongoose");
const DB =
  "mongodb+srv://shahbaz:shahbaz123@cluster0.qbtgurp.mongodb.net/?retryWrites=true&w=majority";
  
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("database connection successfull");
}).catch(()=>{
    console.log("database connection error");
});
