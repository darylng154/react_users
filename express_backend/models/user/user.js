const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema
(
    {
        // overrides Mongoose's default _id
        _id:
        {
            type: Number,
            required: true,
        },
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
    { 
        collection: "users_list",
        versionKey: false
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;