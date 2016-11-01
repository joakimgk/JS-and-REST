//TvShow model (Data model)
// a .js file is equal to a JavaScript module
class TvShow {
  constructor(id, name, genre) {
    this.id = id;
    this.name = name;
    this.genre = genre;
  }
}
// in order to be able to import our TvShow class,
// we need to export it - to make it public:
module.exports = TvShow;
