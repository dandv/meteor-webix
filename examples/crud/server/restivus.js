// Global API configuration
var Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

// Generates: GET, POST on /api/movies and GET, PUT, DELETE on
// /api/movies/:id for the Movies collection
Api.addCollection(Movies);
