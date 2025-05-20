const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: String,
    password: String,

},{collection:'admin'})

module.exports = mongoose.model('admins', AdminSchema)