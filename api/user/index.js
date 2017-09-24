const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');


router.get('/', ctrl.index);
router.post('/', ctrl.create);
router.get('/:id', ctrl.findById);
router.delete('/:id', ctrl.deleteById);
router.put('/:id', ctrl.updateById)

module.exports = router;
