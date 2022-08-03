const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    c_name: {
        type: String,
        required: true,
        trim: true
    },
    c_code: {
        type: String,
        required: true,
        unique: true,
    },
    c_faculty1: {
        type: String
    },

    c_faculty2: {
        type: String
    },

    c_sem: {
        type: String
    },
    c_lab:{
        type:String
    },
    c_description:{
        type:String
    },
    c_prerequistes:{
        type:String
    },
    c_students:{
        type:Number
    },

    c_objectives:[{
        ob:{
            type: String
        },
    }],

    c_assignment:
    [{
        a_id:{
            type: Number
        },
        a_status:{
            type:Boolean
        },
        a_description:{
            type:String
        },
        a_date:{
            type:String
        }
    }],

    

})

const Course = mongoose.model('Course', courseSchema)

module.exports = Course