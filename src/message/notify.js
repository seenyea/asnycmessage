const NotifyToSomebody = 'notify somebody';
export const notifyToSomebody = ({socket, io}) => {
    socket.on(NotifyToSomebody, msg => {
        io.emit(NotifyToSomebody, msg);
    });
}