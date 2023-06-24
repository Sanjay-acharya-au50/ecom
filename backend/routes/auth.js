const router = require("express").Router();

const User = require("../models/User");

const CryptoJS = require("crypto-js");

const jwt = require("jsonwebtoken");

const cors = require("cors");

// router.use(cors ({
//   credentials:true,
//   origin:'http://localhost:5173'
// }))

router.get('/', (req,res)=>{
  res.json("test is working")
})

// ------------------------------------------------


// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // password: req.body.password,
    // pssword encrypt cryptoJS method -------------
    //                                 urlaccess           secret key
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString(),
  }

  
  );
  try {
    const savedUser = await newUser.save();
    // console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ------------------------------------------------


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("wrong cred");

    const hashedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_KEY
    );
    // console.log(hashedPass);

    // var password = CryptoJS.AES.decrypt(hashedPass, process.env.PASS_KEY);

    const OriginalPassword = hashedPass.toString(CryptoJS.enc.Utf8);
    console.log(OriginalPassword,hashedPass);

    OriginalPassword != req.body.password && res.status(401).json("wrong pass");


    const accessToken = jwt.sign({
      id : user._id,
      isAdmin : user.isAdmin,
    }, 
    process.env.JWT_SEC,
    {expiresIn : "3d"}
    )

    // hide the password in post man
    const {password, ...others} = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
