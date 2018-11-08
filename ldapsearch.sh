#!/bin/bash
HOST="domain.co"
BIND_DN="cn=root"
SID="(uid={{username}})"
USER_NAME=""
PASSWORD=""

ldapsearch -x -LLL -h ${HOST} -D ${USER_NAME} -w ${PASSWORD} -b ${BIND_DN} -s sub ${SID}