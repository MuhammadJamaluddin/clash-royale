const express = require('express');
const axios = require('axios');

const app = express();

const port = 3000;
app.listen(port, () => console.log(`the app is listening on port ${port}`));

app.use(express.static('public'));

app.get('/cardsData', (req, res) => {
  axios.get('http://www.clashapi.xyz/api/cards')
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
