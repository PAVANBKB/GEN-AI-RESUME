const express = require('express');
const authUser = require('../middleware/auth.middleware');
const { generateInterviewController } = require('../controller/interview.controller');


const interviewRoute = express.Router()
/**
 * @route POST /api/
 * @description it will take resume desc,job dec and user self intro 
 * @acess private
 */

interviewRoute.post('/',authUser,generateInterviewController)

module.exports = interviewRoute