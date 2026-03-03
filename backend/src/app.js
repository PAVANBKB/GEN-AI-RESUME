const express = require('express');
const cookieParser=require('cookie-parser')
const app=express()


app.use(express.json())
app.use(cookieParser())



/** require all routes her  */
const authRoute = require('./routes/auth.route');

/**using all routes here */
app.use('/api/auth',authRoute)

module.exports=app