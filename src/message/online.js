import { setUser } from '../data/index.js';
const Online = 'online';
export const onlineUp = ({socket, io}) => {
    socket.on(Online, d => {
        setUser(d.userName, {socketId: socket.id});
        console.log('onlineUp => ', d.userName, socket.id);
    });
}