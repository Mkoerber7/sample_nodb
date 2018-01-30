// install and require modules
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

// what port should we listen on?
const port = 3001;

// app (server) declaration
const app = express();

//middleware
app.use(json());
app.use(cors());

// controller functions
const {
  getData,
  postData,
  putData,
  deleteData,
  paginateCoins,
  searchCoins
} = require(`${__dirname}/controllers/mainCtrl`);

// get initial data
app.get("/api/get", getData);
// get tracked coins
app.get("/api/tracked", getData);
// get different data
app.get("/api/paginatecoins", paginateCoins);
// add data
app.post("/api/post", postData);
// update data point
app.put("/api/put", putData);
// delete data point
app.delete("/api/delete/:id", deleteData);

// Open server to requests and responses
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
