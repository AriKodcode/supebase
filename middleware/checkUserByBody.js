const checkBody = (req, res, next) => {
  const userBode = req.body;
  if (userBode.username && userBode.password) {
    next();
  } else {
    res.status(401).send('missing fields');
  }
};
export default checkBody;
