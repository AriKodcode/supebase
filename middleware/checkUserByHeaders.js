const checkHeaders = (req, res, next) => {
  const userHeaders = req.headers;
  if (userHeaders.username && userHeaders.password) {
    next();
  } else {
    res.status(401).send('missing fields');
  }
};
export default checkHeaders;
