import express from 'express'
import session from 'express-session'

const server = express()
const port = 3000;

server.use(express.json());
server.use(express.static('client'));

server.use(session({ secret: 'verySecretKey', resave: false, saveUninitialized: false, cookie: { secure: false }, }));

server.listen(port, () => {
  console.log(`Server open on http:localhost:${port}`);
});

