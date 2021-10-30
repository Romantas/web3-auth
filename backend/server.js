const express = require("express");
const Web3Token = require("web3-token");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());

app.get("/", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.post("/", async function (req, res) {
  const token = req.headers["authorization"];

  const { address, body } = await Web3Token.verify(token);

  console.log(address, body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
