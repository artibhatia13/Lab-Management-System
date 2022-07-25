const express = require('express')

const router = require('./src/router/basic')
require('./src/db')
const port = process.env.PORT||3001


const app=express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())

app.use(router)

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})