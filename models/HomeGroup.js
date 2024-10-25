const mongoose = require('mongoose');

const homeGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authorAdmin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
        //ogni gruppo deve essere creato da un utente 
        // che sarà anche il suo admin
    }],
})

module.exports = mongoose.model('HomeGroup', homeGroupSchema);