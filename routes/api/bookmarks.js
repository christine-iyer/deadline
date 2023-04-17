const router = require('express').Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// /api/bookmarks/:id
router.delete('/:id', checkToken, ensureLoggedIn,  bookmarkCtrl.destroyBookmark, bookmarkCtrl.respondWithBookmark)

// /api/bookmarks/:id | put | update
router.put('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.updateBookmark,bookmarkCtrl.respondWithBookmark )

// /api/bookmarks | post | create
router.post('/', checkToken, ensureLoggedIn, bookmarkCtrl.createBookmark, bookmarkCtrl.respondWithBookmark)

module.exports = router
