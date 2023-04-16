const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//sign up - /api/users
router.post('/',userCtrl.signUp, userCtrl.respondWithToken)


//logIn /api/users/login
router.post('/login',userCtrl.login, userCtrl.respondWithToken)

//get items /api/users/inputs
router.get('/inputs', checkToken, ensureLoggedIn, userCtrl.getInputsByUser, userCtrl.respondWithInputs)

module.exports = router