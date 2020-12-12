#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE ordering;
    GRANT ALL PRIVILEGES ON DATABASE ordering TO dev;
    CREATE DATABASE shipping;
    GRANT ALL PRIVILEGES ON DATABASE shipping TO dev;
EOSQL
