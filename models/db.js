const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    username: String,
    arguments: String
});

module.exports = mongoose.model("Db", dbSchema);
