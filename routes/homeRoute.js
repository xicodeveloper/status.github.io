const router=require("express").Router();
const indexController=require("../controller/indexController")

router.get('/', indexController.showTeamEvent);

module.exports=router;