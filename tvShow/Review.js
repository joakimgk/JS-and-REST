//Review model (Data model)
// a .js file is equal to a JavaScript module
class Review {
  constructor(id, content, score, relatedItemId) {
    this.id = id;
    this.content = content;
    this.score = score;
    this.relatedItemId = relatedItemId;
  }
}
// in order to be able to import our Review class,
// we need to export it - to make it public:
module.exports = Review;
