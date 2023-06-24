// 3)

const router = require("express").Router();

router.get("/user", (req,res)=>{
    res.send("backend hello")
})


// 4)
router.post("/use", (req,res)=>{
    const name = req.body.name;
    console.log("name");
    res.send("nameis:" + name)
})


module.exports = router;