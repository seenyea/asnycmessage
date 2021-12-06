import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app)
const io = new Server(server, { cors: true });

const port = process.env.PORT || 3000;

import { heartBeat } from './src/api/heatbeat.js';
import { notifyToSomebody } from './src/message/notify.js';
import { praiseSomebody } from './src/message/praise.js';
import { addSomebody } from './src/message/add.js';
import { onlineUp } from './src/message/online.js';

import { getSccketInfo } from './src/api/getsocketinfo.js';
import { getPraiseLists } from './src/api/getpraiselists.js';

/**api */
//heart beat
heartBeat({app});
//get socket information
getSccketInfo({app, port});
//get praise lists
getPraiseLists({app});

/**
 *  initilize socket
 */

io.on('connection', (socket) => {
    console.log('one enters in => ', socket.id);
    //notify somebody
    notifyToSomebody({socket, io});
    //praise somebody
    praiseSomebody({socket, io});
    //add somebody
    addSomebody({socket, io});
    //user online
    onlineUp({socket, io});
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});