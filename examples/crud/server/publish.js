'use strict';

Meteor.publish('Movies', function() {
  return Movies.find();
});

Movies.allow({
  insert: function (userId, doc) {
    //A safer alternative would be :
    //return (userId && doc.owner === userId);
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    //A safer alternative would be :
    //return doc.owner === userId;
    return true;
  },
  remove: function (userId, doc) {
    //A safer alternative would be :
    //return doc.owner === userId;
    return true;
  },
  fetch: ['owner']
});
