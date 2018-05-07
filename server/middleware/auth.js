const jwt = require('jsonwebtoken');
const keys = require('./../config/keys');
const pgp = require('pg-promise')();
const connection = keys.postgresql;
const db = pgp(connection);

let auth = (req, res, next ) => {
    let token = req.cookies['x-auth'];

    let decoded;  
    try {
        decoded = jwt.verify(token, keys.secret);
    } catch (e) {
        return Promise.reject();
    }

    if (decoded) {
        db.one(`SELECT email FROM login WHERE id=${decoded._id} AND token='${token}'`).then((data) => {
            db.one(`SELECT * FROM users WHERE email='${data.email}'`).then((user) => {
                req.user = user;
                req.token = token;
                next();
            }).catch((e) => { res.status(401).json({ error: true});  });
        }).catch((e) => { res.status(401).json({ error: true});  });
    } else {
        return Promise.reject();
    }
}

module.exports = {
     auth
 }