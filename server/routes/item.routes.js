const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getall", itemController.selectAll);
router.post("/signup", itemController.signUp)
router.post("/signin", itemController.signIn)
router.post("/add", itemController.addPost)
router.delete("/delete/:id",itemController.deletePost)
module.exports = router;
