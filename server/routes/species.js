const router = require('express').Router();
const {Species} = require('../../db/models');
module.exports = router;

router.get('/', (req, res, next) =>{
  Species.findAll({
    attributes: { exclude: ['password', 'salt'] }
  })
    .then(species => res.json(species))
    .catch(next);
});

router.get('/:speciesId', (req, res, next) => {
  Species.findOne({
    where: { id: req.params.speciesId },
    attributes: { exclude: ['password', 'salt'] }
  })
    .then(species => res.json(species))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Species.create(req.body)
    .then(species => res.status(201).json(species))
    .catch(next);
});

router.put('/:speciesId', (req, res, next) => {
  Species.update(req.body, {
    where: { id: req.params.speciesId }
  })
    .then(species => res.json(species))
    .catch(next);
});

router.delete('/:speciesId', (req, res, next) => {
  Species.findById(req.params.speciesId)
    .then(species => species.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});


