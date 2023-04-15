const router = require('exress').Router()
const userCtrl = require('../controllers/api/users')
const checkToken = require('../config/checkToken')
const ensureLoggedIn = require('../config/ensureLoggedIn')
const user = require('../models/user')

//sign up - /api/users
router.post('/',userCtrl.signUp, userCtrl.respondWithToken)


//logIn /api/users/login
router.post('/login',userCtrl.login, userCtrl.respondWithToken)

//get items /api/users/items
router.get('/items', checkToken, ensureLoggedIn, userCtrl.getInputsByUser, userCtrl.respondWithInputs)
module.exports = router