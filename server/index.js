const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;
app.listen(port, () => console.log(`the app is listening on port ${port}`));

app.use(express.static('public'));

app.get('/cardsData', (req, res) => {
  axios.get('http://www.clashapi.xyz/api/cards')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

const jsonParser = bodyParser.json();
app.post('/share', jsonParser, (req, res) => {
  // Now that we access to the 8 cards, we can share it however we like...
  console.log(req.body);
  res.end();
});
