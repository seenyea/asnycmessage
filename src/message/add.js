import { updateLists } from '../data/index.js';

export const AddSomebodyEvt = 'add somebody';
export const addSomebody = ({socket, io}) => {
    socket.on(AddSomebodyEvt, d => {
        console.log('AddSomebodyEvt => ', d);
        const data = updateLists(d.data);
        io.emit(AddSomebodyEvt, {data});
    });
}