const { auth, check } = require("../middlewares");
const user_controller = require("../controllers/user.controller");
const { checkPeriod } = require("../middlewares/check");

module.exports = function (app) {
  //средние
  app.get(
    `/api/get/:id/temperature/avg/:period`,
    [check.checkID, check.checkPeriod],
    user_controller.getTemperatureAvg
  );

  app.get(
    `/api/get/:id/pressure/avg/:period`,
    [check.checkID, check.checkPeriod],
    user_controller.getPressureAvg
  );

  //минимум
  app.get(
    `/api/get/:id/temperature/min/:period`,
    [check.checkID, check.checkPeriod],
    user_controller.getTemperatureMin
  );

  app.get(
    `/api/get/:id/pressure/min/:period`,
    [check.checkID, check.checkPeriod],
    user_controller.getPressureMin
  );

  //максимум
  app.get(
    `/api/get/:id/temperature/max/:period`,
    [check.checkID, check.checkPeriod],
    user_controller.getTemperatureMax
  );

  app.get(
    `/api/get/:id/pressure/max/:period`,
    [check.checkID, check.checkPeriod],
    user_controller.getPressureMax
  );
};
