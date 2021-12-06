import { v4 as uuidv4 } from 'uuid';

const defaultCommand = 'appenpraise';
const defaultName = 'John';
const defaultDesc = 'did something great! Congratulations to him!';
const __avatarSrc = "https://joeschmoe.io/api/v1/random";

/**
 * {
 *  command,
 *  name,
 *  desc
 * }
 */

const lists = [];

export const getDefaultList = () => ({
    id: uuidv4(),
    command: defaultCommand,
    name: defaultName,
    desc: defaultDesc
})

export const getList = () => {
    return {lists};
};

export const updateLists = o => {

    const f = lists.filter(e => e.name === o.name);
    console.log('updateLists => ', o, f);
    if(f.length === 0){
        o.id = uuidv4();
        o.desc = o.desc || defaultDesc;
        lists.push(o);
    }else{
        f[0].desc = o.desc || f[0].desc;
    }
    return o;
};

export const praiseSomebodyByName = name => {
    let lens = 0;
    lists.forEach(e => {
        console.log('praiseSomebodyByName name =>', name, e.name, e.name === name);
        if(e.name === name){
            lens++;
            e.avatarSrc = __avatarSrc;
        }
    });

    return lens > 0;
}


const userMaps = {};

export const getUser = userName => {
    return userMaps[userName] || null;
} 

export const setUser = (userName, value) => {
    userMaps[userName] = value;
}
