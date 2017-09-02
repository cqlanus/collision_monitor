const router = require('express').Router();
const {Place} = require('../../db/models');
module.exports = router;

router.get('/', (req, res, next) =>{
  Place.findAll({
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(places => res.json(places))
  .catch(next)
})

router.get('/:placeId', (req, res, next) => {
  Place.findOne({
    where: { id: req.params.placeId },
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(place => res.json(place))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Place.create(req.body)
  .then(place => res.status(201).json(place))
  .catch(next)
})

router.put('/:placeId', (req, res, next) => {
  Place.update(req.body, {
    where: { id: req.params.placeId }
  })
  .then(place => res.json(place))
  .catch(next)
})

router.delete('/:placeId', (req, res, next) => {
  Place.findById(req.params.placeId)
  .then(place => place.destroy())
  .then(() => res.sendStatus(204))
  .catch(next)
})


