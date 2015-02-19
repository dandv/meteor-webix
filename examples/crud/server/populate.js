'use strict';

if (Movies.find().count() === 0) {
  Movies.insert({title: 'The Shawshank Redemption', year: 1994, rating: 9.2});
  Movies.insert({title: 'The Godfather', year: 1972, rating: 9.2});
  Movies.insert({title: 'Forrest Gump', year: 1994, rating: 8.7});
  Movies.insert({title: 'The Matrix', year: 1999, rating: 8.7});
}

// more movie data: http://www.imdb.com/xml/find?json=1&tt=on&q=meteor
