const router=require("express").Router();

router.get('/game',function (req,res) {
res.render("game")
})

module.exports=router;