const mongoose = require("mongoose");

const labschema = mongoose.Schema({
    l_name :{
        type: String,
        required: true,
        trim: true,
    },

    l_code:{
        type:String,
        required:true,
        unique:true,
    },

    l_manager:{
        type: String,
        required: true,
        trim:true,
    },

    l_location:{
        type:String,
        required:true,
        trim:true
    },

    l_sysno:{
        type: Number
    },

    l_description:{
        type:String,
    },

    l_systems:[{
        s_id:{
            type:Number,
            unique:true
            
        },
        s_status:{
            type:Boolean
        },
        s_problem:{
            type:String,
        }
    }],
    availableDays: {
        monday: [{
            one:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            two:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            three:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            four:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            five:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            six:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
        }],
        tuesday:  [{
            one:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            two:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            three:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            four:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            five:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            six:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
        }],
        wednesday:  [{
            one:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            two:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            three:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            four:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            five:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            six:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
        }],
        thursday:  [{
            one:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            two:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            three:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            four:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            five:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            six:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
        }],
        friday:  [{
            one:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            two:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            three:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            four:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            five:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            six:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
        }],
        saturday:  [{
            one:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            two:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            three:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            four:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            five:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
            six:[{
                c_name:{
                    type:String
                },
                c_subject:{
                    type:String
                }
            }],
        }],
    },




    

})

const Lab = mongoose.model('Lab',labschema)
module.exports = Lab