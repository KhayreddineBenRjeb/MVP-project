
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
var selectAll = function (req, res) {
  db.query("SELECT p.* ,u.username FROM post p inner join users u on p.id_user=u.id_user", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var signUp= (req,res)=>{
const username=req.body.username
const email=req.body.email
const password=req.body.password
const sql=`SELECT * FROM users WHERE email=${email} `
db.query(sql,(err,result)=>{
    if(err){
        res.send(err)
    }
    if(result.length>0){
        res.send("user already exist")
    }else{
        db.query("INSERT INTO users (username,email,password) VALUES (?,?,?)",[username,email,password],(err,result)=>{
            if(err){
                res.send(err)
            }
            else{
res.send(['yes',result])
            }
        })
    }
})
}
var signIn=(req,res)=>{
    const email=req.body.email
const password=req.body.password
const sqlSel=`SELECT * FROM users WHERE  email=? AND password=? `
db.query(sqlSel,[email,password],(err,result)=>{
    if(err){
        res.send(err)
    }
    if(result.length>0){
        res.send(["succesfully connected",result])
    }else{
        res.send("Login faild")
    }
})
}
const addPost=(req,res)=>{
    
    db.query("INSERT INTO post set ?",req.body,(err,result)=>{
        if (err){
            res.send(err)
            }
            else{
                res.send(result)
            }
    })
}
 const deletePost=(req,res)=>{
const id =req.params.id
db.query("DELETE FROM post WHERE id=?",[id],(err,result)=>{
    if (err){
        res.send(err)
        }
        else{
            res.send(result)
        }
})
 }
 
   

module.exports = { selectAll,
    signUp,
    signIn,addPost,deletePost
 };
