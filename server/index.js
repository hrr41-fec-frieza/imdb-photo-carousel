const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json());


app.get('/', (req, res) => {

});

app.post('/', (req, res) => {

});


app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});