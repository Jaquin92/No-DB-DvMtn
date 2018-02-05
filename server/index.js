const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3002;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { postData } = require(`${__dirname}/controllers/mainCtrl`);
const { getData } = require(`${__dirname}/controllers/mainCtrl`);
const { getFav } = require(`${__dirname}/controllers/mainCtrl`);
const { postPoem } = require(`${__dirname}/controllers/mainCtrl`);
const { deletePoem } = require(`${__dirname}/controllers/mainCtrl`);
const { editPoem } = require(`${__dirname}/controllers/mainCtrl`);
const { getNewPoems } = require(`${__dirname}/controllers/mainCtrl`);
app.get("/api/getNew", getNewPoems);
app.delete("/api/delete/:id", deletePoem);
app.get("/api/test", getData);
app.post("/api/post", postData);
app.post("/api/postPoem", postPoem);
app.get("/api/fav", getFav);
app.put("/api/edit/:id", editPoem);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
