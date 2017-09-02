const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/observations', require('./observations'));
router.use('/collisions', require('./collisions'));
router.use('/assessments', require('./assessments'));
router.use('/species', require('./species'));
router.use('/places', require('./places'));
router.use('/comments', require('./comments'));
router.use('/messages', require('./messages'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})