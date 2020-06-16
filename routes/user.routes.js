const { auth, check } = require("../middlewares");
const user_controller = require("../controllers/user.controller");


module.exports = function (app) {

  //средние
  app.get(
    `/api/get/:id/temperature/avg/:period`,
    [check.checkID],
    user_controller.getTemperatureAvg
  );

  app.get(
    `/api/get/:id/pressure/avg/:period`,
    [check.checkID],
    user_controller.getPressureAvg
  );

  //минимум
  app.get(
    `/api/get/:id/temperature/min/:period`,
    [check.checkID],
    user_controller.getTemperatureMin
  );

  app.get(
    `/api/get/:id/pressure/min/:period`,
    [check.checkID],
    user_controller.getPressureMin
  );

  //максимум
  app.get(
    `/api/get/:id/temperature/max/:period`,
    [check.checkID],
    user_controller.getTemperatureMax
  );

  app.get(
    `/api/get/:id/pressure/max/:period`,
    [check.checkID],
    user_controller.getPressureMax
  );
};
