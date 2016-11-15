const Review = require('./Review');


// class that has a TV shows array, and a getALl() method to return it
class ReviewService {
  constructor() {
    this.reviews = [];
    this.nextid = this.reviews.length +1;
  }

  getAll() {
    console.log("getAll()");
    return this.reviews;
  }

  // uses ES6 find() to return show by ID
  getById(id) {
    console.log("getById(" + id + ")");
    let result = this.reviews.find(review =>
        (review === undefined ? null : review.id) == id);
    if (result) return result;
    else return null;
  }

  addReview(content, score, relatedItemId) {
    this.reviews.push(new Review(this.nextid, content, score, relatedItemId));
    console.log('addReview(' + content + ', ' + score + ', ' + relatedItemId + ') lagt til med id '
        + this.nextid);
    this.nextid++;
    return this.getById(this.nextid-1);
  }

  updateReview(id, content, score, relatedItemId) {
    console.log("updateReview()");
    let review = this.getById(id);
    if (review === null) return null;
    reviews.content = content;
    reviews.score = score;
    reviews.relatedItemId = relatedItemId;
    return review;
  }

  deleteReview(id) {
    console.log("deleteReview(" + id + ")");
    const delIndex = this.reviews.findIndex(
        review => (review === undefined ? null : review.id) == id
    );
    if (delIndex >= 0) this.reviews.splice(delIndex,1);
    return null;
  }

}

// and, export it!
module.exports = new ReviewService();
