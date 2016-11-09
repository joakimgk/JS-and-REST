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

    this.nextid = this.tvShows.length +1;
  }

  getAll() {
    console.log("getAll()");
    return this.tvShows;
  }

  getById_old(id) {
    console.log("getById_old(" + id + ")");
    for (var i = 0; i < this.tvShows.length; i++) {
      if (this.tvShows[i].id === id) {
        return this.tvShows[i];
      }
      //var tvshow = this.tvShows[i]
      //this.findShow(tvShow, id);
    }
    console.log("NO MATCH");
    return null;
  }

  // uses ES6 find() to return show by ID
  getById(id) {
    console.log("getById(" + id + ")");
    let result = this.tvShows.find(show =>
        (show === undefined ? null : show.id) == id);
    if (result) return result;
    else  return null;
  }

  addShow(navn, genre) {
    //this.tvShows[this.nextid-1] = new TvShow(this.nextid, navn, genre);
    this.tvShows.push(new TvShow(this.nextid, navn, genre));
    console.log('addShow(' + navn + ', ' + genre + ') lagt til med id '
        + this.nextid);
    this.nextid++;
    return this.getById(this.nextid-1);
  }

  updateShow(id, navn, genre) {
    let tvshow = this.getById(id);
    if (tvshow === null) return null;
    tvshow.name = navn;
    tvshow.genre = genre;
    return tvshow;
  }

  deleteShow(id) {
    console.log("deleteShow(" + id + ")");
    //this.tvShows.splice(id,1);

    const delIndex = this.tvShows.findIndex(
        show => (show === undefined ? null : show.id) == id
    );
    if (delIndex >= 0) this.tvShows.splice(delIndex,1);
    return null;
  }
}

// and, export it!
// NB! Vi må eksportere en *instans* av klassen
// (alternativt må vi new'e opp en instans der vi includer servicen)
module.exports = new TvShowService();
