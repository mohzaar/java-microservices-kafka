#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE ordering-db;
    GRANT ALL PRIVILEGES ON DATABASE ordering-db TO dbuser;
    CREATE DATABASE shipping-db;
    GRANT ALL PRIVILEGES ON DATABASE shipping-db TO dbuser;
EOSQL