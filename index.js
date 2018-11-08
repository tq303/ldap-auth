const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const LdapStrategy = require('passport-ldapauth');

const PORT = 8080;

const options = {
  server: {
    url: 'ldap://domain.co',
    bindDN: 'cn=root',
    bindCredentials: 'secret',
    searchBase: 'ou=passport-ldapauth',
    searchFilter: '(uid={{username}})'
  }
};

const app = express();

passport.use(new LdapStrategy(options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());

app.post('/login', passport.authenticate('ldapauth', {session: false}), (req, res) => {
  res.send({ status: 'ok' });
});

app.listen(PORT);
