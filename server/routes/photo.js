var express = require("express");
var router = express.Router();
const photoController = require("../Controllers/photoController");

/* GET users listing. */
router.get("/", (req, res) => {
  res.json(photoController.getList());
});

//Put
router.put("/:id", (req, res) => {
  //Some stuff here
  res.json(photoController.incrementLikes(req.params.id));
});

module.exports = router;
