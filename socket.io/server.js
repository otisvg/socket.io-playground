import express from 'express';
import http from 'http';

const app = express();
const HTTP = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h2>Lets chat! :)</h2>')
});

HTTP.listen(3000, () => {
  console.log('listening on localhost:3000')
});