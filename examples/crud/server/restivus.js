// Global API configuration
var Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

// Generates: GET, POST on /api/items and GET, PUT, DELETE on
// /api/items/:id for Items collection
Api.addCollection(Movies);
