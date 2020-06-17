//const { check } = require("../middlewares");
const user_controller = require("../controllers/user.controller"); //контроллер для обработки запроса
const { checkID, checkPeriod } = require("../middlewares/check"); //различные middleware проверки

module.exports = function (app) {
  //средние
  app.get(
    `/api/get/:id/temperature/avg/:period`,
    [checkID, checkPeriod],
    user_controller.getTemperatureAvg
  );

  app.get(
    `/api/get/:id/pressure/avg/:period`,
    [checkID, checkPeriod],
    user_controller.getPressureAvg
  );

  //минимум
  app.get(
    `/api/get/:id/temperature/min/:period`,
    [checkID, checkPeriod],
    user_controller.getTemperatureMin
  );

  app.get(
    `/api/get/:id/pressure/min/:period`,
    [checkID, checkPeriod],
    user_controller.getPressureMin
  );

  //максимум
  app.get(
    `/api/get/:id/temperature/max/:period`,
    [checkID, checkPeriod],
    user_controller.getTemperatureMax
  );

  app.get(
    `/api/get/:id/pressure/max/:period`,
    [checkID, checkPeriod],
    user_controller.getPressureMax
  );
};
