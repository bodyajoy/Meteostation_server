const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/db.config");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose.set("useCreateIndex", true);

//делаем коннект к базе, если не будет коннектта - программа офнется
db.mongoose
  .connect(
    `mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}/${dbConfig.DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// главный путь
app.get("/", (req, res) => {
  return res.status(200).send("OK");
});

// разделение пути, есть путь для сенсоров, есть путь для пользовательских интерфейсов
require("./routes/user.routes")(app);
require("./routes/sensor.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  console.log("initial");
}
