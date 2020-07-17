

var path = require("path");
var router = require("express").Router();
var fs=require("fs")
const { v4: uuidv4 } = require('uuid');






  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  router.post("/notes", function(req, res) {
    userInput = req.body;

let dbInfo=fs.readFileSync("./db/db.json","utf-8")

let newDbInfo=JSON.parse(dbInfo)


userInput.id=uuidv4(); 


newDbInfo.push(userInput)

fs.writeFile("./db/db.json",JSON.stringify(newDbInfo),function(err){
  if(err){
    console.log(err)
  }
})

res.end()


  })

  router.get("/api/notes", function(req, res) {
    console.log("api call on notes")


  })

  module.exports = router;