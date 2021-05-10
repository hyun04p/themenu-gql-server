const express = require('express');
const app = express();
const PORT = process.argv[2] === undefined ? 4000 : process.argv[2];

const now = new Date().getTime();

app.get('/', (req, res) => {
  res.json({
    timestampe: now,
    message: 'work please',
  });
});

app.listen(PORT, () => {
  console.log(`Listening to Port: ${PORT}`);
});
