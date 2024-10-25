const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskId: {
        type: String,
        required: true,
        unique: true
    },
    taskName: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
    },
    taskUser: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" //ogni task deve essere collegato almeno ad un utente
    }]
})
module.exports = mongoose.model('Task', userSchema);
