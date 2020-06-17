const db = require("../models");
const Sensor = db.sensor;

//по названиям догадаешься, что делают

exports.getTemperatureAvg = (req, res) => {
  let date_now = new Date(); //дату в момент запроса определеяем
  const period = req.params.period; //вычленяем период, который указали (миддваре уже проверил, что совпадение есть)
  
  if (period === `day`) {
    date_now.setDate(date_now.getDate() - 1); //делаем дату на один день раньше
  }

  if (period === `week`) {
    date_now.setDate(date_now.getDate() - 7); //делаем дату на 7 дней раньше
  }

  if (period === `month`) {
    date_now.setDate(date_now.getDate() - 30); //делаем дату на 30 дней раньше
  }

  //запрос в коллекцию
  Sensor.find(
    { id_sensor: req.params.id, timestamp_of_sensor: { $gte: date_now } }, //айди сенсора такой-то, а дату по сенсора ставим больше, чем вычислили сверху
    "temperature", //нам нужно только поле температуры
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      //складываем все температуры
      let avg = 0; 
      docs.forEach((element) => {
        avg += element.temperature;
      });
      return res.status(200).send({ result: avg / docs.length }); //находим среднее арифметическое
    }
  );
};

exports.getPressureAvg = (req, res) => {
  let date_now = new Date();
  const period = req.params.period;

  if (period === `day`) {
    date_now.setDate(date_now.getDate() - 1);
  }

  if (period === `week`) {
    date_now.setDate(date_now.getDate() - 7);
  }

  if (period === `month`) {
    date_now.setDate(date_now.getDate() - 30);
  }

  Sensor.find(
    { id_sensor: req.params.id, timestamp_of_sensor: { $gte: date_now } },
    "pressure",
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      let avg = 0;
      docs.forEach((element) => {
        avg += element.pressure;
      });
      return res.status(200).send({ avg_pressure: avg / docs.length });
    }
  );
};

exports.getTemperatureMin = (req, res) => {
  let date_now = new Date();
  const period = req.params.period;

  if (period === `day`) {
    date_now.setDate(date_now.getDate() - 1);
  }

  if (period === `week`) {
    date_now.setDate(date_now.getDate() - 7);
  }

  if (period === `month`) {
    date_now.setDate(date_now.getDate() - 30);
  }

  Sensor.find(
    { id_sensor: req.params.id, timestamp_of_sensor: { $gte: date_now } },
    "temperature",
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      let minArray = [];
      docs.forEach((element) => {
        minArray.push(element.temperature);
      });
      return res
        .status(200)
        .send({ min_temperature: Math.min.apply(Math, minArray) });
    }
  );
};

exports.getPressureMin = (req, res) => {
  let date_now = new Date();
  const period = req.params.period;

  if (period === `day`) {
    date_now.setDate(date_now.getDate() - 1);
  }

  if (period === `week`) {
    date_now.setDate(date_now.getDate() - 7);
  }

  if (period === `month`) {
    date_now.setDate(date_now.getDate() - 30);
  }

  Sensor.find(
    { id_sensor: req.params.id, timestamp_of_sensor: { $gte: date_now } },
    "pressure",
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      let minArray = [];
      docs.forEach((element) => {
        minArray.push(element.pressure);
      });
      return res
        .status(200)
        .send({ min_pressure: Math.min.apply(Math, minArray) });
    }
  );
};

exports.getTemperatureMax = (req, res) => {
  let date_now = new Date();
  const period = req.params.period;

  if (period === `day`) {
    date_now.setDate(date_now.getDate() - 1);
  }

  if (period === `week`) {
    date_now.setDate(date_now.getDate() - 7);
  }

  if (period === `month`) {
    date_now.setDate(date_now.getDate() - 30);
  }

  Sensor.find(
    { id_sensor: req.params.id, timestamp_of_sensor: { $gte: date_now } },
    "temperature",
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      let maxArray = [];
      docs.forEach((element) => {
        maxArray.push(element.temperature);
      });
      return res
        .status(200)
        .send({ max_temperature: Math.max.apply(Math, maxArray) });
    }
  );
};

exports.getPressureMax = (req, res) => {
  let date_now = new Date();
  const period = req.params.period;

  if (period === `day`) {
    date_now.setDate(date_now.getDate() - 1);
  }

  if (period === `week`) {
    date_now.setDate(date_now.getDate() - 7);
  }

  if (period === `month`) {
    date_now.setDate(date_now.getDate() - 30);
  }

  Sensor.find(
    { id_sensor: req.params.id, timestamp_of_sensor: { $gte: date_now } },
    "pressure",
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      let maxArray = [];
      docs.forEach((element) => {
        maxArray.push(element.pressure);
      });
      return res
        .status(200)
        .send({ max_pressure: Math.max.apply(Math, maxArray) });
    }
  );
};
