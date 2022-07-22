const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sreeram:miniproject@cluster0.ulawef0.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Successfully connected to MongoDB')
}).catch(err => console.log(err))