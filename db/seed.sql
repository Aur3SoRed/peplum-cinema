INSERT INTO peplum (title, release, director, actor, actress, countrycode) VALUES
('Spartacus', 1960, 'Stanley Kubrick', 'Kirk Douglas', 'Jean Simmons', 'USA'),
('Quo Vadis', 1951, 'Mervyn LeRoy', 'Peter Ustinov', 'Deborah Kerr', 'USA'),
('Ben Hur', 1959, 'William Wylder', 'Charlton Heston', 'Haya Harareet', 'USA'),
('Hercules', 1958, 'Pietro Francisci', 'Steve Reeves', 'Sylva Koscina', 'ITA');



INSERT INTO forum (peplum_id, review) VALUES
((SELECT peplum.peplum_id FROM peplum WHERE title LIKE '%Spartacus%'), 'I am Spartacus'),
((SELECT peplum.peplum_id FROM peplum WHERE title LIKE '%Quo Vadis%'), 'Latin phrase meaning: Where are you marching?'),
((SELECT peplum.peplum_id FROM peplum WHERE title LIKE '%Ben Hur%'), 'Classic Christmas movie for christians'),
((SELECT peplum.peplum_id FROM peplum WHERE title LIKE '%Hercules%'), 'The worst works into history of world');