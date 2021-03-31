const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const users = [
    {
        name: 'abc',
        pass: 'abc',
        User_Id: 1
    },
    {
        name: 'cde',
        pass: 'cde',
        User_Id: 2
    }
]

router.post('/', function (req, res) {
    console.log("starting the login proces.....")
    const { user, pass } = req.body;
    const theUser = users.find(u => u.name === user && u.pass === pass);
    if (theUser) {
        const token = jwt.sign({ User_Id: theUser.User_Id }, process.env.SECRET_KEY, {
            expiresIn: '5h'
        });
        return res.send(token);
    }
})

module.exports = router;