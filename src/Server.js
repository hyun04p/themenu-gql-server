const express = require("express");
const app = express();
const PORT = process.argv[2] === undefined ? 4000 :process.argv[2];

app.get("/", (req, res) => {
  res.json({
    port: PORT
  })
})

app.listen(PORT, () => {
  console.log(`Listening to Port: ${PORT}`);
})