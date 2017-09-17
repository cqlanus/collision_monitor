const router = require('express').Router();
const {Comment} = require('../../db/models');
module.exports = router;

router.get('/', (req, res, next) =>{
  Comment.findAll({
    attributes: { exclude: ['password', 'salt'] }
  })
    .then(comments => res.json(comments))
    .catch(next);
});

router.get('/:commentId', (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.commentId },
    attributes: { exclude: ['password', 'salt'] }
  })
    .then(comment => res.json(comment))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Comment.create(req.body)
    .then(comment => res.status(201).json(comment))
    .catch(next);
});

router.put('/:commentId', (req, res, next) => {
  Comment.update(req.body, {
    where: { id: req.params.commentId }
  })
    .then(comment => res.json(comment))
    .catch(next);
});

router.delete('/:commentId', (req, res, next) => {
  Comment.findById(req.params.commentId)
    .then(comment => comment.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});


