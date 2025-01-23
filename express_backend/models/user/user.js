const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema
(
    {
        firstName: 
        {
            type: String,
            required: false,
            trim: true,
        },
        lastName: 
        {
            type: String,
            required: false,
            trim: true,
        },
    },
    { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;