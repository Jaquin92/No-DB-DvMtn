const axios = require("axios");
let char = [];
let myPoems = [];
let fav = [];

const postData = (req, res, next) => {
  if (!fav.filter(title => title.title === req.body.title)[0]) {
    fav.push(req.body);
  }

  res.send(fav);
  console.log(fav);
};

const getFav = (req, res, next) => {
  res.send(fav);
};

const getData = (req, res, next) => {
  axios
    .get("http://poetrydb.org/author/Shakespeare")
    .then(response => {
      char.push(response.data);
      res.send(char);
    })
    .catch(console.log);
};

const postPoem = (req, res, next) => {
  myPoems.push(req.body);
  res.send(myPoems);
  // console.log("Hello");
};

const deletePoem = (req, res, next) => {
  const { id } = req.params;
  fav = fav.filter(poem => poem.title !== id);
  res.send(fav);
};

const getNewPoems = (req, res, next) => {
  res.send(myPoems);
};

const editPoem = (req, res, next) => {
  const { id } = req.params;

  myPoems[id].lines = req.body.edit;

  res.send(myPoems);
};

module.exports = {
  getData: getData,
  postData: postData,
  getFav: getFav,
  postPoem: postPoem,
  deletePoem: deletePoem,
  editPoem: editPoem,
  getNewPoems: getNewPoems
};
