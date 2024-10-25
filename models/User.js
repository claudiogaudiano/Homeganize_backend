const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    homeGroup: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "HomeGroup" //ogni user deve essere collegato almeno ad un gruppo
    }]
})
module.exports = mongoose.model('User', userSchema);
