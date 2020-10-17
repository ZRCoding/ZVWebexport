const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('/index.html')
});

var port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('server started on ' + port.toString());
});