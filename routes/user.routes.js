//const { check } = require("../middlewares");
const user_controller = require("../controllers/user.controller"); //контроллер для обработки запроса
const { checkID, checkPeriod, checkSensor } = require("../middlewares/check"); //различные middleware проверки

module.exports = function (app) {
  app.get(
    `/api/get/:id/all/:period`,
    [checkID, checkPeriod],
    user_controller.getAll
  );

  app.get(
    `/api/get/:id/:sensor/avg/:period`,
    [checkID, checkPeriod, checkSensor],
    user_controller.getAvg
  );

  app.get(
    `/api/get/:id/:sensor/min/:period`,
    [checkID, checkPeriod, checkSensor],
    user_controller.getMin
  );

  app.get(
    `/api/get/:id/:sensor/max/:period`,
    [checkID, checkPeriod, checkSensor],
    user_controller.getMax
  );
};
