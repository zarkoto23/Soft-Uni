import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "BASICSECRET";

export const authMiddleware = (req, res, next) => {
  //get token
  const token = req.cookies["auth"];
  if (!token) {
    //if guest
    return next();
  }

  //validate token
  try {
    const decodedToken = jwt.verify(token, SECRET);
    //attach decoded token to request
    req.user = decodedToken;
    res.locals.user=decodedToken

    next();
  } catch (error) {
    //todo: invalid token
    res.clearCookie("auth");

    res.redirect("/auth/login");
  }
};
