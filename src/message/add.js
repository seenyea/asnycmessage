import { updateLists } from '../data/index.js';

const AddSomebody = 'add somebody';
export const addSomebody = ({socket, io}) => {
    socket.on(AddSomebody, d => {
        console.log('AddSomebody => ', d);
        const data = updateLists(d.data);
        io.emit(AddSomebody, {data});
    });
}