const db = require("../models");
const Sensor = db.sensor;

//TESTING RANDOM
exports.addSensorUpdate = (req, res) => {

  const sensor = new Sensor({
    timestamp_of_insert: new Date(),
    id_sensor: 1,
    timestamp_of_sensor: new Date(),
    temperature: getRandomInt(-10, 50),
    pressure: getRandomInt(720, 900),
  });

  sensor.save((err, result) => {
    if (err) {
      return res.status(200).send({ error: err });
    }
    return res.status(200).send(result);
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
