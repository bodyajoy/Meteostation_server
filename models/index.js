const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.stationUpdate = require("./station_update.model");

module.exports = db;
