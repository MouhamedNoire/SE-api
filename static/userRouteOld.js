express = require('express');
const router = express.Router();
const db = require('../src/db')

/**get all users */
function callBackUsers(res,req,rows){
    res.set('content-type', 'application/json')
    res.set('sserver',"myspace-server")
    console.log(rows)
    res.status(200).send(rows);
}

router.get('/',(req,res)=>{
    db.all('SELECT * FROM users',(err,rows)=>{
        callBackUsers(res,req,rows)
    })
})


router.post('/',(req,res)=>{
    userData = req.body;
    userJson = userData;

    const sql = `INSERT INTO users(firstname,lastname,email,password) VALUES ('${userData.firstname}','${userData.lastname}','${userData.email}','${userData.password}')`;
    db.exec(sql,(err)=>{
        if(err){
            return console.error(err.message)
        }

        console.log(`A row has been added with id ${this.lastID} ${err}`)
        userJson.id = this.lastID;

        res.set('content-type','application/json')
        res.set('server','myspace-server')

        res.status(201).send(userJson)
    })
})


router.get('/:id',(req,res)=>{
    const userId = req.params.id
    db.get(`SELECT * FROM users WHERE id = ${userId}`,(err,row)=>{
        if(err){
            console.error(err.message)
        }else if(row)
            res.status(200).send(row)
        else
            res.status(404);
    })
})


























module.exports = router;