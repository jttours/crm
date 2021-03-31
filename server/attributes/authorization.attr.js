const jwt = require('jsonwebtoken');

/* userToken { User_Id: number } */

module.exports = function (req, res, next) {
    const [tokenType, userToken] = req.headers.authorization.split(" ");
    if (tokenType === 'Bearer') {
        try {
            const tokenData = jwt.verify(userToken, process.env.SECRET_KEY);
            
            req.User_Id = tokenData.User_Id;
            next();
        }
        catch (ex) {
            return res.status(401).send(ex);
        }
    }

    //return res.status(401).send("you do not have authorization");
}