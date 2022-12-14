const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.SECRET_JWT;

const fetchUser = (req, res, next) => {
  // get the use from the jwt token and add id to request object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.SECRET_JWT);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
    console.log(error)
  }
};

module.exports = fetchUser;
