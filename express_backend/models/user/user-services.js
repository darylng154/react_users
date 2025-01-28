const mongoose = require("mongoose");
const userModel = require("./user");
const dotenv = require("dotenv");

mongoose.set("debug", true);
dotenv.config();

console.log(">>mongo cluster: " + process.env.MONGO_USER_CLUSTER);
mongoose.connect
(
    "mongodb+srv://" + 
    process.env.MONGO_USER + 
    ":" + 
    process.env.MONGO_PWD + 
    "@" + 
    process.env.MONGO_USER_CLUSTER + 
    process.env.MONGO_BASE_URL +
    process.env.MONGO_USER_DB +
    process.env.MONGO_USER_OPTIONS
).catch((error) => console.log(error));


// user queries
async function getUsers(firstName)
{
    let result;
    if(firstName == undefined)
    {
        result = await userModel.find();
    }
    else if(firstName)
    {
        result = await findUserByFirstName(firstName);
    }

    return result;
}

async function findUserById(id)
{
    try
    {
        return await userModel.findById(id)
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
}

async function findUserByFirstName(firstName)
{
    try
    {
        // find() - mongoose function
        return await userModel.find({firstName: firstName});
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
}

async function addUser(user)
{
    try
    {
        const userToAdd = new userModel(user);
        const savedUser = await userToAdd.save();
        return savedUser;
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
}

async function deleteUserById(id)
{
    try
    {
        return await userModel.findByIdAndDelete(id);
    }
    catch(error)
    {
        console.log(error);
        return undefined;
    }
}

exports.getUsers = getUsers;
exports.findUserById = findUserById;
exports.findUserByFirstName = findUserByFirstName;
exports.addUser = addUser;
exports.deleteUserById = deleteUserById;