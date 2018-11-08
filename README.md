# LDAP Authentication

# Express
Uses passport ldap auth library, to run `node index.js` then to test login:

```
[POST] /login
Content-Type: application/x-www-form-urlencoded
username=username
password=password
```

# Shell Script
Populate the relevant variables and run `./ldapsearch.sh` to test connection.
