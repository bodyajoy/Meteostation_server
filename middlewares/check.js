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
  const period = req.params.period;

  if (!period || !periodArray.includes(period)) {
    return res
      .status(500)
      .send({ error: `No period! Use ${periodArray.join(` / `)}` });
  }

  let date_now = new Date();

  if (period === `day`) {
    date_now.setDate(date_now.getDate() - 1);
  }

  if (period === `week`) {
    date_now.setDate(date_now.getDate() - 7);
  }

  if (period === `month`) {
    date_now.setDate(date_now.getDate() - 30);
  }

  req.params.period = date_now;
  next();
};

const sensorArray = [`temperature`, `pressure`];
exports.checkSensor = (req, res, next) => {
  const sensor = req.params.sensor;

  if (!sensor || !sensorArray.includes(sensor)) {
    return res
      .status(500)
      .send({ error: `No sensor! Use  ${sensorArray.join(` / `)}` });
  }
  next();
};
