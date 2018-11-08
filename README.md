# LDAP Authentication

## Prerequisites
```
node ^8
yarn or npm
bash
ldapsearch (only required for the cli test script)
```

## Express
Uses passport ldap auth library, to run and listen for code change runs either `yarn run` or `npm run` from the command line. Then to test login send the following request:

```
[POST] /login
Content-Type: application/x-www-form-urlencoded
username=username
password=password
```

## Shell Script
Populate the relevant variables and run `./ldapsearch.sh` to test connection.
