require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const router = require('./routes/router');
require('./db/conn');
const users = require('./models/userSchema');

const PORT=8001;

app.use(cors());
app.use(express.json());

app.use(router)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})