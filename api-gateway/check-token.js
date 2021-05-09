let jwt = require('jsonwebtoken');
let config = require('./config');

/**
 * Check the HTTP Header for a valid JSON WEb Token
 * @param req
 * @param res
 * @param next
 */

function checkToken(req, res, next){

    let token = req.headers['x-access-token'];

    if(!token)
        return res.status(403).send({auth: false, message: 'No token provided'});

    jwt.verify(token, config.web.secret, function(err, decoded){
        if(err) return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}

module.exports = checkToken;