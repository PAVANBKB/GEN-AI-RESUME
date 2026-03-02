const express = require('express');
const { registerController, loginUserController } = require('../controller/auth.controller');


const authRoute=express.Router()
/**
 * @route POST /api/auth/register
 * @description regiester user expects username,email,password
 * @acess public
 */
authRoute.post('/register',registerController)
/**
 * @route POST /api/auth/login
 * @description login user expects email and password
 * @acess public
 */
authRoute.post('/login',loginUserController)



module.exports=authRoute