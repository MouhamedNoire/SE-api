const bodyParser = require('body-parser')
const express = require('express')
const port = 3301
const app = express()
const path = require('path')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'static')))

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/static/:filename',(req,res)=>{
    const filename = req.params.filename
    res.sendFile(path.join(__dirname),'static',filename)
})



app.listen(port,
()=>{
    console.log(`app listen in http://localhost:${port}`)
})