const router = require('express').Router();
const {Observation, Place, Collision, Photo, Comment, Species} = require('../../db/models');
module.exports = router;

router.get('/', (req, res, next) =>{
  Observation.findAll({
    attributes: { exclude: ['password', 'salt'] },
    include: [{model: Collision, include: [Species]}, Place]
  })
  .then(observations => res.json(observations))
  .catch(next)
})

router.get('/:observationId', (req, res, next) => {
  Observation.findOne({
    where: { id: req.params.observationId },
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(observation => res.json(observation))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Observation.create(req.body)
  .then(observation => res.status(201).json(observation))
  .catch(next)
})

router.put('/:observationId', (req, res, next) => {
  Observation.update(req.body, {
    where: { id: req.params.observationId }
  })
  .then(observation => res.json(observation))
  .catch(next)
})

router.delete('/:observationId', (req, res, next) => {
  Observation.findById(req.params.observationId)
  .then(observation => observation.destroy())
  .then(() => res.sendStatus(204))
  .catch(next)
})


