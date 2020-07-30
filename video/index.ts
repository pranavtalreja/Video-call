const express = require("express");
const path = require("path");
const config = require("./config");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const { videoToken } = require("./tokens");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.listen(3001);
const sendTokenResponse = (token, res) => {
  res.set("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
};
app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get("/video/token", (req, res) => {
  const identity = req.query.identity;
  const room = req.query.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
});
app.post("/video/token", (req, res) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
