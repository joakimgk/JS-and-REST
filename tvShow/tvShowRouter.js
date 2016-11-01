const express = require('express');

// When we import local modules we use the filename sans the extension:
// TvShow.js -> require('TvShow'):
const TvShow = require('./TvShow');
const tvserv = require('./tvShowService');

// create a new instance of an Express routerS
const tvShowRouter = express.Router();

/*
// array to hold our TV shows, and some dummy shows:
const tvShows = [
  new TvShow(1, 'Mr.Robot', 'Drama'),
  new TvShow(2, 'Black Mirror', 'Drama')
];
*/
//const myService = new tvserv();
let tvShows = tvserv.getAll();

// make a route for fetching all TV shows
// GET /tvshow
// vi definerer endepunktet /tvshow her
tvShowRouter.get('/', function(request, response) {
  // .sjon() means: take my tvShows array, parse it to json,
  // and set it as my response's body (aka the response data)
  response.json(tvShows);
});

// Remember to export the router
// so it's possible to require() it from other modules.
module.exports = tvShowRouter;
