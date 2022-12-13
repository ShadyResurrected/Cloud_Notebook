const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

const JWT_SECRET = "TodayIsTuesday@22"; // This is a jwt secret

// Create a user using: POST "/api/auth/createUser". Does not require auth or
router.post(
  "/createUser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 7 characters").isLength({
      min: 7,
    }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10); // Adds extra security in password by adding random characters
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Creating a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json(authToken);


    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error Occurred");
    }
  }
);

module.exports = router;
