const { Schema, model } = require('mongoose')

const inputSchema = new Schema({
email: { type: String, required: true},
title: { type: String },
check:  Boolean ,
link: { type: String }
}, {
     timestamps:true
})

module.exports = model('Input', inputSchema)

