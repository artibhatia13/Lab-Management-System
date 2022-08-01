const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    s_name: {
        type: String,
        required: true,
        trim: true
    },
    admissionNo: {
        type: String,
        required: false,
        unique: true,
    },
    class: {
        type: String
    },

    year: {
        type: String
    },

    division: {
        type: String
    },

    lab:[{
        l_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lab'
        },
        grade:{
            type: Number,
        },
        attendance:{
            type: Number
        }
    }]

    

})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student