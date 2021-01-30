import express from 'express';
import http from 'http';
import path from 'path';
import io from 'socket.io';



imort 

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const HTTP = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

HTTP.listen(3000, () => {
  console.log('listening on localhost:3000')
});