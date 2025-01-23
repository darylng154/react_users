const mongoose = require("mongoose");
const userModel = require("./user");
const dotenv = require("dotenv");

mongoose.set("debug", true);
dotenv.config();

mongoose.connect
(
    "mongodb+srv://" +
    process.env.MONGO_USER +
    ":" +
    process.env.MONGO_PWD +
    "@" +
    process.env.MONGO_CLUSTER +
    process.env.MONGO_BASE_URL,

).catch((error) => console.log(error));

