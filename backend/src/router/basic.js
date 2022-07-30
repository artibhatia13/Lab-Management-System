const express = require('express')
const router = express.Router()

const Student = require('../modal/Student')
const Lab = require('../modal/Lab')
const { rawListeners } = require('../modal/Student')

router.post('/', (req, res) => {
    success = {
        status: true,
    }
    res.status(200).send(success)
})

router.post('/admin_login', async (req, res) => {
    try {
        let success
        console.log(req.body);
        if (req.body.adminID === "admin" || req.body.password === "mec") {
            success = {
                status: true,
                loggedin: true,
                message: "Logged in successfully"
            }
        }
        else {
            success = {
                status: false,
                message: "Login failed"
            }
        }
        res.status(200).send(success)
    } catch (error) {
        const errorRes = {
            status: false,
            message: error,
            loggedin: false
        }
        res.status(400).send(errorRes)
    }
})

//add a lab
router.post('/create_lab', async (req, res) => {
    try {
        const lab = new Lab(req.body)
        await lab.save()
        let success = {
            status: true,
            lab: lab
        }
        res.status(201).send(success)
    } catch (error) {
        const failure = {
            status: false,
            error: error
        }
        res.status(400).send(failure)
    }
})

//get all labs

router.get('/lab_list', async (req, res) => {
    try {
        const labs = await Lab.find().select(["l_name","l_code"])

        if (labs.length !== 0) {
            let success = {
                status: true,
                labs: labs,
            }
            res.status(200).json(success)
        }
        else {
            let success = {
                status: true,
                labs: labs,
                msg: "No Labs present"
            }
            res.status(200).json(success)
        }

    }

    catch (err) {
        res.status(404).json({ status: false, err: "No User Or Server Error" })
    }

})

router.get('/lab/:id', async(req,res) =>{
    try{
        console.log(req.params);
        const lab= await Lab.find( {l_code : req.params.id}).select([])
        // console.log(lab);
        if(lab.length != 0){
            let success= {
                status:true,
                data:lab[0],
            }
            res.status(200).json(success)
        }
        else{
            let success={
                status:false,
                message:"Could not find the Lab",
                data:{}
            }
            res.status(200).json(success)

        }
    }
    catch(err){
        res.status(404).json({ status:false, err:"Server Error"})

    }
})
module.exports = router