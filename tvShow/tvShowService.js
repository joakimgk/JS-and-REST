/*
  The difference between the tv show service and tv show router
  is that the router handles only http and web related things,
  and the service handles anything except http and web related things.
  Ideally, the service should not have any "knowledge" about
  the internet or anything web framework related at all.
*/

// class that has a TV shows array, and a getALl() method to return it
class TvShowService {
  constructor() {
    this.tvShows = [];
  }

  getAll() {
    return this.tvShows;
  }
}

// and, export it!
// NB! Vi må eksportere en *instans* av klassen
// (alternativt må vi new'e opp en instans der vi includer servicen)
module.exports = new TvShowService();
