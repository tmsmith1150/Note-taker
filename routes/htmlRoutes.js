var path = require("path");
var router = require("express").Router();





  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  

 
  router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  })

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })

  module.exports = router;