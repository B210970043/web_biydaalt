const mongoose  = require('mongoose')

const ScholarSchema = new mongoose.Schema({
    nameofBaiguullaga: String,
    email: String,
    nameofTetgeleg: String,
    hotolbor: String,
    things1: String,
    things2: String,
    things3: String,
    shaardlaga1: String,
    shaardlaga2: String,
    shaardlaga3: String,
    lang1: String,
    lang2: String,
    lang3: String,
    material1: String,
    material2: String,
    material3: String,
    url: String,
    date: { type: Date, default: Date.now },
    amjilttai: { type: Boolean, default: false },
});


const ScholarModel = mongoose.model("scholar", ScholarSchema)
module.exports = ScholarModel
