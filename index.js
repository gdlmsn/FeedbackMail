const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//env variable for heroku runtime config
const PORT = process.env.PORT || 5000;
app.listen(PORT);
