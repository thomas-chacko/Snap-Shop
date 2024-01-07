const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  // console.log("token is", token);

  try {
    const jwtResponse = jwt.verify(token, process.env.JwtSecretKey);
    // console.log(jwtResponse);
    req.payload = jwtResponse.userId;
    next();
  } catch (error) {
    res.status(403).json("authorization failed");
  }
};

module.exports = jwtMiddleware;
