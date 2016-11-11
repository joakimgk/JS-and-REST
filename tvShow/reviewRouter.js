const express = require('express');

// tvShowService requires Review.js, so don't need to require it here
const revserv = require('./reviewService');

// create a new instance of an Express router
const reviewRouter = express.Router();

// make a route for fetching all TV shows
// GET /review
// vi definerer endepunktet /tvshow her
// (alle endepunkt er relative til mappen, tvshow/)
reviewRouter.get('/', function(request, response) {
  // .sjon() means: take my tvShows array, parse it to json,
  // and set it as my response's body (aka the response data)
  console.log("\n\nget('review/')");
  response.json(revserv.getAll());
});

// GET /review/:id
reviewRouter.get('/:reviewId', function(request, response) {
  console.log("\n\nget('review/:reviewId'), ID: " + request.params.reviewId);
  response.json(revserv.getById(request.params.reviewId));
});

// POST /review
reviewRouter

  .post('/', function(request, response) {
      console.log("\n\npost('review/'): " + request.body.action + " "
       + request.body.navn + ", " + request.body.genre );
      const newReview = revserv.addReview(request.body.content, request.body.score, request.body.relatedItemId);
      response.send(newReview);
    })
  .put('/:reviewId', function(request, response) {
      console.log("\n\nput('review/:reviewId'), ID: " + request.params.reviewId);
      const updReview = revserv.updateReview(request.params.reviewId,
            request.body.content, request.body.score, request.body.relatedItemId);
      response.send(updTvShow);
    })
  // DELETE /review/:reviewId
  .delete('/:reviewId', function(request, response) {
      console.log("\n\ndelete('review/:reviewId'), ID: " + request.params.reviewId);
      revserv.deleteReview(request.params.reviewId);
      response.send(null);
    });

// Remember to export the router
// so it's possible to require() it from other modules.
module.exports = reviewRouter;
