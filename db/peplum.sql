DROP TABLE IF EXISTS peplum CASCADE;
DROP TABLE IF EXISTS forum CASCADE;

CREATE TABLE peplum (
  peplum_id SERIAL PRIMARY KEY,
  title CHAR(50),
  release INTEGER NOT NULL,
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

INSERT INTO peplum (title, release, director, actor, actress, countrycode) VALUES
('Espartaco', 1960, 'Stanley Kubrick', 'Kirk Douglas', 'Jean Simmons', 'USA'),
('Quo vadis', 1951, 'Mervyn LeRoy', 'Peter Ustinov', 'Deborah Kerr', 'USA'),
('Ben Hur', 1959, 'Billy Wyller', 'Charlton Heston', 'Haya Harareet', 'USA'),
('Hércules', 1958, 'Pietro Francisci', 'Steve Reeves', 'Sylva Koscina', 'ITA');



INSERT INTO forum (review) VALUES
('I am Spartacus'),
('Latin phrase meaning: Where are you marching?'),
('Classic Christmas movie for christians'),
('The worst works into history of world');