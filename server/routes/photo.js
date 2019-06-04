var express = require("express");
var router = express.Router();
const photoController = require("../Controllers/photoController");

/* GET users listing. */
router.get("/", (req, res) => {
  res.json(photoController.getList());
});

module.exports = router;
