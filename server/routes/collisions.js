const router = require('express').Router();
const {Collision} = require('../../db/models');
module.exports = router;

router.get('/', (req, res, next) =>{
  Collision.findAll({
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(collisions => res.json(collisions))
  .catch(next)
})

router.get('/:collisionId', (req, res, next) => {
  Collision.findOne({
    where: { id: req.params.collisionId },
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(collision => res.json(collision))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Collision.create(req.body)
  .then(collision => res.status(201).json(collision))
  .catch(next)
})

router.put('/:collisionId', (req, res, next) => {
  Collision.update(req.body, {
    where: { id: req.params.collisionId }
  })
  .then(collision => res.json(collision))
  .catch(next)
})

router.delete('/:collisionId', (req, res, next) => {
  Collision.findById(req.params.collisionId)
  .then(collision => collision.destroy())
  .then(() => res.sendStatus(204))
  .catch(next)
})


