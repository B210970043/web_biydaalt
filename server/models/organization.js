const mongoose  = require('mongoose')

const OrganizaitonSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const OrganizationModel = mongoose.model("organization", OrganizaitonSchema)
module.exports = OrganizationModel
