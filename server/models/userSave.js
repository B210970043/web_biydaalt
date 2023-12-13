const mongoose  = require('mongoose')

const userSaveSchema = new mongoose.Schema({
    userName: String,
    scholarName: String,
    date: { type: Date, default: Date.now },
})

const UserSaveModel = mongoose.model("userSave", userSaveSchema)
module.exports = UserSaveModel;
