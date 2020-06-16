const { auth, check } = require("../middlewares");
const sensor_controller = require("../controllers/sensor.controller");

module.exports = function (app) {
  //добавляем данные с сенсора
  app.post(`/api/add`, [auth.auth], sensor_controller.addSensorUpdate);
};
