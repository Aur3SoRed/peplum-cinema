INSERT INTO peplum (title, release, poster, director, actor, actress, countrycode) VALUES
('Spartacus', 1960, 'http://annyas.com/images/kubrick-movie-typography/spartacus-one-sheet-movie-poster.jpg', 'Stanley Kubrick', 'Kirk Douglas', 'Jean Simmons', 'USA'),
('Quo Vadis', 1951, 'https://www.ultimatemovierankings.com/wp-content/uploads/2017/09/Poster-Quo-Vadis-1951_03.jpg', 'Mervyn LeRoy', 'Peter Ustinov', 'Deborah Kerr', 'USA'),
('Ben Hur', 1959, 'https://upload.wikimedia.org/wikipedia/commons/7/74/Ben_hur_1959_poster.jpg', 'William Wylder', 'Charlton Heston', 'Haya Harareet', 'USA'),
('Hercules', 1958, 'https://1.bp.blogspot.com/-mJL2PLRIRkA/TWrN9bpnKnI/AAAAAAAAApE/MSg879sDJEY/s1600/hercules_1958_poster_01.jpg', 'Pietro Francisci', 'Steve Reeves', 'Sylva Koscina', 'ITA');



INSERT INTO forum (peplum_id, review) VALUES
((SELECT peplum.peplum_id FROM peplum WHERE title LIKE '%Spartacus%'), 'I am Spartacus'),
((SELECT peplum.peplum_id FROM peplum WHERE title LIKE '%Quo Vadis%'), 'Latin phrase meaning: Where are you marching?'),
((SELECT peplum.peplum_id FROM peplum WHERE title LIKE '%Ben Hur%'), 'Classic Christmas movie for christians'),
((SELECT peplum.peplum_id FROM peplum WHERE title LIKE '%Hercules%'), 'The worst works into history of world');