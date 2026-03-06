require('dotenv').config()
const app = require("./src/app");
const connectDB = require('./src/config/db');
const invoke = require('./src/services/ai.service');
const {jobdescribe, resume, selfdescribe} = require('./src/services/temp');

connectDB()
app.listen(process.env.PORT, () => {
    console.log('sever is running ');
})
async function call() {
   const data= await invoke({jobdescribe, resume, selfdescribe})
    console.log(data);
}
call()