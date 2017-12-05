const router = require('express').Router();
const { Review } = require('../db/models');

module.exports = router;


router.get('/', (req, res, next) => {
  Review.findAll({ include: [{ all: true }] })
    .then(reviews => {
      console.log("server reviews", reviews)
      res.json(reviews)}
  )
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Review.findById(req.params.id, { include: [{ all: true }] })
    .then(review => res.json(review))
    .catch(next);
});

router.post('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  Review.create(req.body)
    .then(review => {
      review.setUser([userId])
      res.status(201).json(review)
    })
    .catch(next);
});

router.put('/:reviewId', (req, res, next) => {
  Review.findById(req.params.reviewId)
    .then(review => review.update(req.body))
    .then(review => res.status(201).send(review))
    .catch(next);
});

router.delete('/:reviewId', (req, res, next) => {
  Review.findById(req.params.reviewId)
    .then(review => review.destroy())
    .then(() => res.status(204).end())
    .catch(next);
});
