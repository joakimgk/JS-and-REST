/*
  The difference between the tv show service and tv show router
  is that the router handles only http and web related things,
  and the service handles anything except http and web related things.
  Ideally, the service should not have any "knowledge" about
  the internet or anything web framework related at all.
*/
const TvShow = require('./TvShow');

// class that has a TV shows array, and a getALl() method to return it
class TvShowService {
  constructor() {
    this.tvShows = [
        new TvShow(1, 'Mr.Robot', 'Drama'),
        new TvShow(2, 'Black Mirror', 'Drama')
      ];
  }

  getAll() {
    return this.tvShows;
  }

  getById(id) {
    for (var i = 0; i < this.tvShows.length; i++) {
      if (this.tvShows.id === id) return this.tvShows[i];
      //var tvshow = this.tvShows[i]
      //this.findShow(tvShow, id);
    }
    return null
  }

  // hjelpefunksjon:
  findShow(tvshow) {

  }
}

// and, export it!
// NB! Vi må eksportere en *instans* av klassen
// (alternativt må vi new'e opp en instans der vi includer servicen)
module.exports = new TvShowService();
