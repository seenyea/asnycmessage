import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { io } from "socket.io-client";

import { AddSomebodyEvt, addSomebody } from '../../src/message/add';

const app = express();
const server = createServer(app)
const ioServer = new Server(server, { cors: true });

const port = 3000;

ioServer.listen(port);
describe('add Somebody Case', function() {

  var socket;

  beforeEach(function(done) {
    // Setup
    socket = io.connect(`http://localhost:${port}`, {
      'reconnection delay' : 0
      ,'reopen delay' : 0
      ,'force new connection' : true
      ,transports: ['websocket']
    });

    socket.on('connect', () => {
      done();
    });

    socket.on('disconnect', () => {
    });

    ioServer.on('connection', (socket) => {
      addSomebody({socket, io: ioServer});
    });
  });

  afterEach((done) => {
    // Cleanup
    if(socket.connected) {
      socket.disconnect();
    }
    ioServer.close();
    done();
  });

  it('add Somebody case one', (done) => {
    const data = {name: '123', desc: '123'};
    socket.emit(AddSomebodyEvt, {data});

    socket.on(AddSomebodyEvt, (d) => {
      expect(d.data.name).toBe(data.name);
      done();
    });

  });
  
});
