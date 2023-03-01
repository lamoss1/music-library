const express = require("express");
const artistRouter = require("./routes/artist");

const app = express();

app.use(express.json());

app.use("/artists", artistRouter);

/*app.get("/artists", async (req, res) => {
  res.status(201).send({
    name: "Kylie Minogue",
    genre: "pop",
  });
})*/

module.exports = app;
