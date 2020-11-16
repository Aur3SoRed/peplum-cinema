DROP TABLE IF EXISTS peplum CASCADE;
DROP TABLE IF EXISTS forum CASCADE;

CREATE TABLE peplum (
  peplum_id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  release INTEGER NOT NULL,
  poster TEXT,
  director VARCHAR(30),
  actor VARCHAR(30),
  actress VARCHAR(30),
  countrycode VARCHAR(3)
);

CREATE TABLE forum (
  peplum_id INT REFERENCES peplum(peplum_id),
  forum_id SERIAL PRIMARY KEY,
  review VARCHAR(2000)
);


SELECT * FROM forum WHERE forum.peplum_id = (SELECT peplum.peplum_id FROM peplum WHERE LOWER (peplum."title") LIKE '%hercules%');

SELECT * FROM peplum WHERE LOWER (peplum."title") LIKE '%ben hur%';