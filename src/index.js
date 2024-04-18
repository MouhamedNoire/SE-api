const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config()
const app = express()
const path = require('path')
const userRouter = require('../src/router/userRoute');


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'static')))


app.get('/',(req,res)=>{
    res.send('hello world')
});


/**Router  */
app.use('/users',userRouter)



app.get('/static/:filename',(req,res)=>{
    const filename = req.params.filename
    res.sendFile(path.join(__dirname),'static',filename)
})


/**Config Server */
app.listen(process.env.PORT,
()=>{
    console.log(`app listen in http://localhost:${process.env.PORT}`)
})