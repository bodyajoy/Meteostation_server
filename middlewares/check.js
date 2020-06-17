//проверяем есть ли айди
exports.checkID = (req, res, next) => {
  req.params.id = parseInt(req.params.id); //обработаем немного
  if (!req.params.id) {
    return res.status(500).send({ error: "Wrong id provided!" });
  }
  next();
};

//проверяем наличие периода и совпадение
const periodArray = [`day`, `week`, `month`];
exports.checkPeriod = (req, res, next) => {
  if (!req.params.period || !periodArray.includes(req.params.period)) {
    return res.status(500).send({ error: "No period! Use day / week / month" });
  }
  next();
};
