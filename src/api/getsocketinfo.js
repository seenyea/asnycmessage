const apiName = '/api/getsocketinfo';
import { v4 as uuidv4 } from 'uuid';
const apiListener = (req, res, port) => {  
    const responseData = {
        data: {
            url: `http://localhost:${port}/`,
        },
        code: 0
    }
    const jsonContent = JSON.stringify(responseData);
    res.end(jsonContent);
};

export const getSccketInfo = ({app, port}) => {
    app.get(apiName, (req, res)=> {
        apiListener(req, res, port);
    });
}