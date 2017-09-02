const router = require('express').Router();
const {Assessment} = require('../../db/models');
module.exports = router;

router.get('/', (req, res, next) =>{
  Assessment.findAll({
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(assessments => res.json(assessments))
  .catch(next)
})

router.get('/:assessmentId', (req, res, next) => {
  Assessment.findOne({
    where: { id: req.params.assessmentId },
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(assessment => res.json(assessment))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Assessment.create(req.body)
  .then(assessment => res.status(201).json(assessment))
  .catch(next)
})

router.put('/:assessmentId', (req, res, next) => {
  Assessment.update(req.body, {
    where: { id: req.params.assessmentId }
  })
  .then(assessment => res.json(assessment))
  .catch(next)
})

router.delete('/:assessmentId', (req, res, next) => {
  Assessment.findById(req.params.assessmentId)
  .then(assessment => assessment.destroy())
  .then(() => res.sendStatus(204))
  .catch(next)
})


