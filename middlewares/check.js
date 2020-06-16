exports.checkID = (req, res, next) => {
  req.params.id = parseInt(req.params.id);
  if (!req.params.id) {
    return res.status(500).send({ error: "Wrong id provided!" });
  }
  next();
};
