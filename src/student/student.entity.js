const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    fone: {
        type: String,
        required: true
    }
})

const student = mongoose.model('student', studentSchema);

module.exports = { studentSchema, student }