const router = require('express').Router()
const inputCtrl = require('../../controllers/api/inputs')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// /api/inputs/:id
router.delete('/:id', checkToken, ensureLoggedIn,  inputCtrl.destroyInput, inputCtrl.respondWithInput)

// /api/inputs/:id | put | update
router.put('/:id', checkToken, ensureLoggedIn, inputCtrl.updateInput,inputCtrl.respondWithInput )

// /api/inputs | post | create
router.post('/', checkToken, ensureLoggedIn, inputCtrl.createInput, inputCtrl.respondWithInput)

module.exports = router
