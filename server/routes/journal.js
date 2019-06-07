var express = require("express");
var router = express.Router();
const journalController = require("../Controllers/journalController");

/* GET users listing. */
router.get("/", (req, res) => {
  res.json(journalController.getList());
});

module.exports = router;
