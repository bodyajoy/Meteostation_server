const mongoose = require("mongoose");

const StationUpdate = mongoose.model(
  "Station_Update",
  new mongoose.Schema(
    {
      id_station: {
        type: Number,
        required: true,
      },

      timestamp_of_station: {
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

module.exports = StationUpdate;
