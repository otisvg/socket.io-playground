import express from 'express';
import http from 'http';
import path from 'path';
import * as io from 'socket.io';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const server = http.createServer(app);
const socketio = new io.Server(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

socketio.on('connection', (socket) => {
  console.log('a user connected');
});

HTTP.listen(3000, () => {
  console.log('listening on localhost:3000')
});