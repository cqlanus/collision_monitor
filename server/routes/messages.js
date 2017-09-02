const router = require('express').Router();
const {Message} = require('../../db/models');
module.exports = router;

router.get('/', (req, res, next) =>{
  Message.findAll({
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(messages => res.json(messages))
  .catch(next)
})

router.get('/:messageId', (req, res, next) => {
  Message.findOne({
    where: { id: req.params.messageId },
    attributes: { exclude: ['password', 'salt'] }
  })
  .then(message => res.json(message))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Message.create(req.body)
  .then(message => res.status(201).json(message))
  .catch(next)
})

router.put('/:messageId', (req, res, next) => {
  Message.update(req.body, {
    where: { id: req.params.messageId }
  })
  .then(message => res.json(message))
  .catch(next)
})

router.delete('/:messageId', (req, res, next) => {
  Message.findById(req.params.messageId)
  .then(message => message.destroy())
  .then(() => res.sendStatus(204))
  .catch(next)
})


