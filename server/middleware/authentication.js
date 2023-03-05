import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const decoded = jwt.verify(token, "news-app-dev");
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).send("Unauthorized");
  }
};

export default authentication;
