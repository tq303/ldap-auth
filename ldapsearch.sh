#!/bin/bash
HOST="domain.co"
BIND_DN="cn=root"
SID="(uid={{username}})"
USERNAME=""
PASSWORD=""

ldapsearch -x -LLL -h ${HOST} -D ${USERNAME} -w ${PASSWORD} -b ${BIND_DN} -s sub ${SID}