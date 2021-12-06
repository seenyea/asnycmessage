const apiName = '/';
const apiListener = (req, res)=>{  
    res.end('Socket is working');
};

export const heartBeat = ({app}) => {
    app.get(apiName, apiListener);
}