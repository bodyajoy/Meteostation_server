const { auth, check } = require("../middlewares");
const station_controller = require("../controllers/station.controller");

module.exports = function (app) {
  //добавляем данные с сенсора
  app.post(`/api/add`, [auth.auth], station_controller.addStationUpdate);
};
