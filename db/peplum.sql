DROP TABLE IF EXISTS films;

CREATE TABLE films (
  title SERIAL PRIMARY KEY,
  year NUMBER(4) NOT NULL,
  director CHAR(30),
  actor CHAR(30),
  actress CHAR(30),
  countrycode CHAR(3),
);

INSERT INTO  films (title, year, director, actor, actress, countrycode) VALUES
('Espartaco', 1960, 'Stanley Kubrick', 'Kirk Douglas', 'Jean Simmons', 'USA'),
('Quo vadis', 1951, 'Mervyn LeRoy', 'Peter Ustinov', 'Deborah Kerr', 'USA'),