

var path = require("path");
var router = require("express").Router();





  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  router.post("/notes", function(req, res) {
    userInput = req.body;
console.log(userInput);

  })

  router.get("/notes", function(req, res) {
    userInput = req.body;
console.log(userInput);

  })

  module.exports = router;