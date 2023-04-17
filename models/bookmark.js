const { Schema, model } = require('mongoose')

const bookmarkSchema = new Schema({
heading: String,
title: String,
check:  Boolean,
link: String
}, {
     timestamps:true
})

module.exports = model('Bookmark', bookmarkSchema)

