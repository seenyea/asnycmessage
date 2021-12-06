import { getList } from '../data/index.js';
const apiName = '/api/getpraiselists';
const apiListener = (req, res) => {  
    const responseData = {
        data: getList(),
        code: 0
    }
    const jsonContent = JSON.stringify(responseData);
    res.end(jsonContent);
};

export const getPraiseLists = ({app}) => {
    app.get(apiName, (req, res)=> {
        apiListener(req, res);
    });
}