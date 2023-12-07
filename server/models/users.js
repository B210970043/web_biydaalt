const mongoose  = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    experience: {
        type: String,
        default: "user"
    },
    phone_number: {
        type: String,
        default: "00000"
    },
    r_dugaar: {
        type: String,
        default: "UB"
    },
    Huis: {
        type: String,
        default: "user"
    },
    Birth_date: {
        type: String,
        default: "user"
    },
    Undsen_mergejliin_salbar: {
        type: String,
        default: "user"
    },
    Mergejil: {
        type: String,
        default: "user"
    },
    Job_experience: {
        type: String,
        default: "user"
    },
    GPA: {
        type: String,
        default: "user"
    },
    Course: {
        type: String,
        default: "user"
    },
    role: {
        type: String,
        default: "visitor"
    }
})


const UsersModel = mongoose.model("user", UsersSchema)
module.exports = UsersModel
