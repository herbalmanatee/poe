const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, ()=> {
  console.log(`listenting on ${PORT}`);
});

