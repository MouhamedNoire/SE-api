userService = require('../service/userService');

exports.getUsers=(req,res)=>{
    users = userService.getAll();
    res.json(users);
}

exports.getUser=(req,res)=>{
    user = userService.getById(id);
    res.json(user);
}

exports.createUser=(req,res)=>{
    const {firstname,lastname,email,password} = req.body;
    if(userService.notExist(email)){
        const user = {firstname,lastname,email,password};
        const data = userService.create(user);
        res.status(201).json(data)
    }
}

exports.updateUser=(req,res)=>{
    const id = req.params.id;
    const user = req.body;
    if(userService.getById(id)){
        data = userService.update(id,user)
        res.status(200).json(data);
    }
}


exports.deleteUser=(req,res)=>{
    const id = req.params.id;
    if(userService.getById(id)){
        userService.delete(id)
        res.sendStatus(204)
    }
}