const express = require('express')
const router = express.Router()

const Student = require('../modal/Student')
const Course = require('../modal/Course')
const Lab = require('../modal/Lab')
const { rawListeners } = require('../modal/Student')

router.post('/', (req, res) => {
    success = {
        status: true,
    }
    res.status(200).send(success)
})


//admin login
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

//get all labs(list labs)

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

//delete a lab

router.post('/delete_lab/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        let book = await Lab.findOneAndDelete({ l_code: req.params.id })
        if (book) {
            let success = {
                status: true,
                msg: "Lab deleted successfully"
            }
            res.status(200).send(success)
        }
        else {
            let success = {
                status: false,
                msg: "Lab could not be deleted"
            }
            res.status(200).send(success)
        }

    }
    catch (error) {
        res.status(400).json({ err: "Lab could not be deleted" })
    }
})

// lab details
router.get('/lab/:id', async(req,res) =>{
    try{
        // console.log(req.params);
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

// add systems to a specific lab

router.post('/add_sys/:id', async(req,res) =>{
    const lsystem= req.body
    // console.log(lsystem);
    try{
        const sysnew= await Lab.findOneAndUpdate({l_code:req.params.id},{...lsystem})
        if (sysnew) {
            let success = {
                status: true,
                msg: "Lab System Added successfully",
                sysnew:sysnew
            }
            res.status(200).send(success)
        }
        else {
            let success = {
                status: false,
                msg: "Lab System could not be added successfully",
            }
            res.status(200).send(success)
        }

    }
    catch (error) {
        res.status(400).json({ err: "Lab system could not be added due to error" })
    }
})

// update systems to a specific lab

router.post('/update_sys/:id', async(req,res) =>{
    // const lsystem= req.body
    // console.log(lsystem);
    try{
        const sysnew= await Lab.updateOne(
            { l_code: req.params.id, "l_systems.s_id": req.body.s_id },
            { $set: { "l_systems.$.s_status" : req.body.s_status, "l_systems.$.s_problem" : req.body.s_problem } }
         )
        if (sysnew) {
            let success = {
                status: true,
                msg: "Lab System Added successfully",
                sysnew:sysnew
            }
            res.status(200).send(success)
        }
        else {
            let success = {
                status: false,
                msg: "Lab System could not be added successfully",
            }
            res.status(200).send(success)
        }

    }
    catch (error) {
        res.status(400).json({ err: "Lab system could not be added due to error" })
    }
})


// delete systems to a specific lab

router.post('/delete_sys/:id', async(req,res) =>{
    const lsystem= req.body
    console.log(lsystem);
    try{
        const sysnew= await Lab.updateOne({'l_code': req.params.id},
            { $pull: { 'l_systems' : { 's_id': req.body.s_id } } ,
             $set : {'l_sysno': req.body.l_sysno}},
            
            );
        if (sysnew) {
            let success = {
                status: true,
                msg: "Lab System Added successfully",
                sysnew:sysnew
            }
            res.status(200).send(success)
        }
        else {
            let success = {
                status: false,
                msg: "Lab System could not be added successfully",
            }
            res.status(200).send(success)
        }

    }
    catch (error) {
        res.status(400).json({ err: "Lab system could not be added due to error" })
    }
})

//add a course
router.post('/create_course', async (req, res) => {
    const l = req.body
    console.log(l);
    try {
        const cou = new Course(req.body)
        await cou.save()
        let success = {
            status: true,
            cour: cou
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

//get all course list
router.get('/course_list', async (req, res) => {
    try {
        const cour = await Course.find().select([])

        if (cour.length !== 0) {
            let success = {
                status: true,
                cour: cour,
            }
            res.status(200).json(success)
        }
        else {
            let success = {
                status: true,
                cour: cour,
                msg: "No Course present"
            }
            res.status(200).json(success)
        }

    }

    catch (err) {
        res.status(404).json({ status: false, err: "No User Or Server Error" })
    }

})

module.exports = router