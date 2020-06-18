const db = require("../models");
const StationUpdate = db.stationUpdate;

exports.getAll = (req, res) => {
  StationUpdate.find(
    {
      id_station: req.params.id,
      timestamp_of_station: { $gte: req.params.period },
    },
    null,
    { sort: { timestamp_of_station: -1 } }, //по убыванию
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      //docs = {}; проверка на пустое значение
      if (!Object.keys(docs).length) {
        return res.status(200).send(docs);
      }

      return res.status(200).send({
        lastUpdate: docs[0].timestamp_of_station,
        temperature: {
          min: findMinByDocs(docs, "temperature"),
          max: findMaxByDocs(docs, "temperature"),
          avg: findAvgByDocs(docs, "temperature"),
        },
        pressure: {
          min: findMinByDocs(docs, "pressure"),
          max: findMaxByDocs(docs, "pressure"),
          avg: findAvgByDocs(docs, "pressure"),
        },
      });
    }
  );
};

exports.getAvg = (req, res) => {
  StationUpdate.find(
    {
      id_station: req.params.id,
      timestamp_of_station: { $gte: req.params.period },
    },
    `${req.params.sensor}`,
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      return res.status(200).send({
        [req.params.sensor + `_avg`]: findAvgByDocs(docs, req.params.sensor),
      });
    }
  );
};

exports.getMin = (req, res) => {
  StationUpdate.find(
    {
      id_station: req.params.id,
      timestamp_of_station: { $gte: req.params.period },
    },
    `${req.params.sensor} timestamp_of_station`,
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      const results = findMinByDocs(docs, req.params.sensor);
      return res.status(200).send({
        [req.params.sensor + `_min`]: results.minElement,
        timestamps: results.indexMin,
      });
    }
  );
};

exports.getMax = (req, res) => {
  StationUpdate.find(
    {
      id_station: req.params.id,
      timestamp_of_station: { $gte: req.params.period },
    },
    `${req.params.sensor} timestamp_of_station`,
    null,
    (err, docs) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      const results = findMaxByDocs(docs, req.params.sensor);
      return res.status(200).send({
        [req.params.sensor + `_max`]: results.maxElement,
        timestamps: results.indexMax,
      });
    }
  );
};

//type точное название поля
function findAvgByDocs(docs, type) {
  let avg = 0;
  docs.forEach((element) => {
    avg += element[type];
  });
  return avg / docs.length;
}

function findMaxByDocs(docs, type) {
  let maxArray = [];
  docs.forEach((element) => {
    maxArray.push(element[type]);
  });
  const maxElement = Math.max.apply(Math, maxArray);
  let indexMax = [];

  docs.forEach((element) => {
    if (element[type] === maxElement) {
      indexMax.push(element.timestamp_of_station);
    }
  });
  return { maxElement, indexMax };
}

function findMinByDocs(docs, type) {
  let minArray = [];
  docs.forEach((element) => {
    minArray.push(element[type]);
  });
  const minElement = Math.min.apply(Math, minArray);
  let indexMin = [];

  docs.forEach((element) => {
    if (element[type] === minElement) {
      indexMin.push(element.timestamp_of_station);
    }
  });
  return { minElement, indexMin };
}
