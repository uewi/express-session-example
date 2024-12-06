const express = require('express');
const app = express();
const session = require('express-session');

app.use(
  session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/count', (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`How many times have you viewed this page? ${req.session.count}`);
});

app.listen(3000);
