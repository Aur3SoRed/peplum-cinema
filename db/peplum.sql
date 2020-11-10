DROP TABLE IF EXISTS films;
DROP TABLE IF EXISTS forum;

CREATE TABLE films (
  title SERIAL PRIMARY KEY,
  year NUMBER(4) NOT NULL,
  director CHAR(30),
  actor CHAR(30),
  actress CHAR(30),
  countrycode CHAR(3),
);

CREATE TABLE forum (
  review VARCHAR(2000),
  id NUMBER NOT NULL,
)

INSERT INTO  films (title, year, director, actor, actress, countrycode) VALUES
('Espartaco', 1960, 'Stanley Kubrick', 'Kirk Douglas', 'Jean Simmons', 'USA'),
('Quo vadis', 1951, 'Mervyn LeRoy', 'Peter Ustinov', 'Deborah Kerr', 'USA'),



INSERT INTO forum (review, id) VALUES
('coment1', '42d41625-20bc-4bdc-9e0b-97e4513e10a3'),
('coment2', '7a3ace53-5aba-468a-9a4c-1df5da10d86b'),