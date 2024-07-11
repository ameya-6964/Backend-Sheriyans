const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports.protect = async (req, res, next) => {
    // Check for token in cookies
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send("You Are Not Authorized");
    }

    try {
        // Verify token
        const data = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by email from token payload
        req.user = await userModel
            .findOne({ email: data.email })
            .select("-password");

        // If user is not found
        if (!req.user) {
            return res.status(401).send("User Not Found");
        }

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Token verification failed or other errors
        res.status(401).send("You Are Not Authorized");
    }
};
