const express = require('express');
const app=express()


app.use(express.json())



/** require all routes her  */
const authRoute = require('./routes/auth.route');

/**using all routes here */
app.use('/api/auth',authRoute)

module.exports=app