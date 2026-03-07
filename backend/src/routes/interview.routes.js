const express = require('express');
const authUser = require('../middleware/auth.middleware');
const { generateInterviewController } = require('../controller/interview.controller');
const upload = require('../middleware/file.middleware');


const interviewRoute = express.Router()
//NOTE - wrap multer to return clean API errors from this route.
const uploadResume = (req, res, next) => {
    upload.single('resume')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        //REVIEW - keep this wrapper if no global express error middleware is configured.
        next()
    })
}
/**
 * @route POST /api/
 * @description it will take resume desc,job dec and user self intro 
 * @acess private
 */

interviewRoute.post('/', authUser, uploadResume, generateInterviewController)

module.exports = interviewRoute
