const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/:id', (req, res) => {
  var input = Date.parse(req.params.id) || +req.params.id;
  var d = new Date(input);
  var output = {
    "unix": null,
    "natural": null
  };
  if (!isNaN(d.getTime())) {
    output.unix = d.getTime();
    output.natural = d.toDateString();
  }
  res.json(output);
});

app.get('*', (req, res) => {
  res.send('Page Not Found', 404);
});

app.listen(port, () => console.log('Listening on port ' + port));