let data = []

exports.getAll=()=>{
    return data;
}

exports.getById=(id)=>{
    return data.find(x=>x.id == id);
}

exports.create=(x)=>{
    const newUser = {...x,id:Date.now().toString()}
    return data.push(newUser)
}

exports.update=(id,x)=>{
    const index = data.findIndex(user=>user.id == id)
    const userUpdate={...x,id:id}
    if(index !== -1){
        data[index] = userUpdate;
    }

    return userUpdate;
}

exports.delete=(id)=>{
    data = data.filter(x=> x.id == id)
}

exports.notExist=(email)=>{
    user = data.find(x=>x.email == email)
    return user === undefined
}