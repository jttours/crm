const uuid = require('uuid');
const md5 = require('md5');

const usersDb = require('./../db/db').users;

function getById(id) {
    return usersDb.find(u => u.User_Id === id);
}

function getByLogin(email, pass) {
    return usersDb.find(u => u.email === email && u.pass === md5(pass));
}

function getOwned(id) {
    if (getById(id).role === 'Admin') {
        return usersDb.filter(u => u.User_Owner === id);
    }
    return null;
}

function add(objModel) {
    if (usersDb.find(u => u.email === objModel.email)) {
        throw new Error('email already taken!');
    }
    const newUser = {
        email: user,
        pass: md5(pass),
        User_Id: uuid.v4()
    };
    usersDb.push(newUser);
    return newUser;
}

module.exports.getById = getById;
module.exports.getOwned = getOwned;
module.exports.getByLogin = getByLogin;
module.exports.add = add;