DROP DATABASE IF EXISTS "blm";

CREATE DATABASE "blm";

\c "blm"

CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    sex TEXT NOT NULL,
    ethnicity TEXT NOT NULL,
    racism TEXT NOT NULL,
    police TEXT NOT NULL,
    vote TEXT NOT NULL,
    community TEXT NOT NULL
);