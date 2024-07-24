const indexDao = require("../dao/indexDao");


exports.dummy = function(req, res){
    return res.send("it works");
}

exports.postLogic = function(req, res){
    const{nickname} = req.body;
    console.log(nickname);
    return res.send(nickname);
}

exports.getUsers = async function(req, res){
    // 로직
    const userIdx = req.params;
    console.log(userIdx);
    
    const[userRows] = await indexDao.getUserRows();
    return res.send(userRows);
}