const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
const port = process.env.PORT || 3001;

const pgp = require('pg-promise')();
const connection = 'postgres://localhost:5432/face-detector';
const db = pgp(connection);

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.get('/api/users', (req, res) => {
    db.any('SELECT * from users').then((users) => {
        res.send(users);
    }).catch((e) => {
        res.status(400).send(e);
    })
   
})

app.get('/api/auth', auth, (req, res) => {
    res.send(req.user)
});

app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (!err) {
                db.none(`INSERT INTO login (hash, email) VALUES ('${hash}', '${email}')`);
                db.one(`INSERT INTO users (name, email) VALUES ('${name}', '${email}') RETURNING *`).then((doc) => {
                    res.send(doc);
                }).catch((e) => {
                    res.status(400).send(e);
                });
             }
        });
    });
   
})

app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;

    db.any(`SELECT id, hash, email FROM login WHERE email='${email}'`).then((data) => {
        const isValid = bcrypt.compareSync(`${password}`, data[0].hash);
        if (isValid) {
         let token = jwt.sign({ _id: data[0].id }, 'cow').toString(); 
         db.none(`UPDATE login SET token='${token}' WHERE email='${email}'`).then(() => {
            db.one(`SELECT * FROM users WHERE email='${email}'`).then((doc) => {
                res.cookie('x-auth', token).send(doc);
            });
         });
        }
    }).catch((e) => { 
        res.status(400).send(e); 
    });
});


app.delete('/api/signout', auth, (req, res) => {
    db.none('UPDATE login SET token=NULL').then(() => {
        res.send('logged out');
    }).catch((e) => { res.status(400).send(); })
    
});

app.post('/api/image', auth, (req, res) => {
    db.none(`UPDATE users SET entries=entries + 1 WHERE email='${req.user.email}'`).then(() => {
        res.send('image count incremented');
    }).catch((e) => { res.status(400).send({ error: true }) });
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); //go to cd client, npm run build

    const path = require('path');
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));  //   '../client' teacher has
    });
}
    
app.listen(port, () => {
    console.log('app runnning on port 3001');
})