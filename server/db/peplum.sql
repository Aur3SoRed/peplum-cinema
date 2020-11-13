DROP TABLE IF EXISTS peplum CASCADE;
DROP TABLE IF EXISTS forum CASCADE;

CREATE TABLE peplum (
  peplum_id SERIAL PRIMARY KEY,
  title CHAR(50),
  release INTEGER NOT NULL,
  poster BYTEA,
  director CHAR(30),
  actor CHAR(30),
  actress CHAR(30),
  countrycode CHAR(3)
);

CREATE TABLE forum (
  peplum_id INT REFERENCES peplum(peplum_id),
  forum_id SERIAL PRIMARY KEY,
  review VARCHAR(2000)
);
