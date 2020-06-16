const mongoose = require("mongoose");

const Sensor = mongoose.model(
  "Sensor",
  new mongoose.Schema(
    {
      id_sensor: {
        type: Number,
        required: true,
      },

      timestamp_of_sensor: {
        type: Date,
        required: true,
      },
      timestamp_of_insert: {
        type: Date,
        required: true,
      },

      temperature: {
        type: Number,
        required: true,
      },
      pressure: {
        type: Number,
        required: true,
      },
    }
    //{ strict: false } //на случай, если будем вносить еще инфу в модель
  )
);

module.exports = Sensor;
