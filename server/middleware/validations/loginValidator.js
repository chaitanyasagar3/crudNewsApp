const loginValidator = (req, res, next) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).send("Username or password is missing");
  }
  next();
};

export default loginValidator;
