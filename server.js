const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"));
});

app.get("/api/", (req, res) => {
  res.send("hello world!");
});

const messageSchema = new mongoose.Schema({
  author: String,
  team: String,
  message: String,
  time: Date
});

const Message = mongoose.model("Message", messageSchema, "messages");

app.get("/api/getMessages/", (req, res) => {
  Message.find()
    .then(found => res.json(found).send())
    .catch(err => new Error(err));
});

app.post("/api/newMessage/", (req, res) => {
  console.log(req.body);
  const { author, team, message, time } = req.body;
  const newMessage = new Message({ author, team, message, time });

  newMessage.save((err, newRepo) => {
    if (err) return console.error(err);
    Message.find()
      .then(found => res.json(found).send())
      .catch(err => new Error(err));
  });
});

app.listen(process.env.PORT || config.port, () =>
  console.log(`Listening on port ${process.env.PORT || config.port}...`)
);

console.log(config.db);

mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB...", err));
