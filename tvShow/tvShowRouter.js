const express = require('express');
/*
// When we import local modules we use the filename sans the extension:
// TvShow.js -> require('TvShow'):
const TvShow = require('./TvShow');
*/
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
//let tvShows = tvserv.getAll();

// make a route for fetching all TV shows
// GET /tvshow
// vi definerer endepunktet /tvshow her
// (alle endepunkt er relative til mappen, tvshow/)
tvShowRouter.get('/', function(request, response) {
  // .sjon() means: take my tvShows array, parse it to json,
  // and set it as my response's body (aka the response data)
  console.log("\n\nget('tvshow/')");
  response.json(tvserv.getAll());
});

// GET /tvshow/:id
tvShowRouter.get('/:tvShowId', function(request, response) {
  console.log("\n\nget('tvshow/:tvShowId'), ID: " + request.params.tvShowId);
  response.json(tvserv.getById(request.params.tvShowId));
});

// POST /tvshow
tvShowRouter

  .post('/', function(request, response) {
      console.log("\n\npost('tvshow/'): " + request.body.action + " "
       + request.body.navn + ", " + request.body.genre );
      const newTvShow = tvserv.addShow(request.body.navn, request.body.genre);
      //response.send(newTvShow);
      response.redirect('/tvShows.html');
    })
  // DELETE /tvshow/:id
  .delete('/:tvShowId', function(request, response) {
      console.log("\n\ndelete('tvshow/:tvShowId'), ID: " + request.params.tvShowId);
      tvserv.deleteShow(request.params.tvShowId);
      response.send('/tvShows.html');
    });

// Remember to export the router
// so it's possible to require() it from other modules.
module.exports = tvShowRouter;
