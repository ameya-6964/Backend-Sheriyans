const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken")

module.exports.registerUser = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        let user = await userModel.findOne({ email })

        if (user) {
            return res.json({ message: "User Already Exist" })
        }

        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);

        user = await userModel.create({
            email,
            password: hash,
            name
        })

        let token = generateToken({
            email
        });

        res.cookie("token", token, { httpOnly: true })
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error.message);

    }
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(500).send("Incorrect Email Or Password");
        }

        let result = await bcrypt.compare(password, user.password)

        if (result) {
            let token = generateToken({
                email
            });

            res.cookie("token", token, { httpOnly: true })
            res.status(200).send("Logged In Succesfully");
        }
        else {
            return res.status(500).send("Incorrect Email Or Password");
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }
    
    
}

module.exports.logoutUser = (req, res) => {
    res.clearCookie("token")
    res.status(200).send("Logged Out Succesfully");
}
module.exports.getUserProfile = (req, res) => {
    res.send("On Profile Route")
}
