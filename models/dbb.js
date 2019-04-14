const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String
});

module.exports = mongoose.model("Db", dbSchema);
