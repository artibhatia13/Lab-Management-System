const mongoose = require('mongoose')

const studentschema = mongoose.Schema({
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
        c_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        },
        grade:{
            type: Number,
        },
        attendance:{
            type: Number
        }
    }]

    

})

const Student = mongoose.model('Student', studentschema)

module.exports = Student