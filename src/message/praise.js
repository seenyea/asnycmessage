import { getUser, praiseSomebodyByName } from '../data/index.js';
const PraiseSomebody = 'praise somebody';
export const praiseSomebody = ({socket, io}) => {
    socket.on(PraiseSomebody, d => {
       const hasChange =  praiseSomebodyByName(d.data.name);
       if(hasChange){
         io.emit(PraiseSomebody, {data: 'ok'});
         const user = getUser(d.data.name);
         if(user && user.socketId)
            socket.to(user.socketId).emit('notify somebody', {msg: 'You had been praised.'});
       }
    });
}