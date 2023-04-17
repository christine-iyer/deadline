const { Schema, model } = require('mongoose')

const inputSchema = new Schema({
heading: { type: String, required: true },
title: { type: String, required: true },
check:  Boolean ,
link: { type: String, required: true }
}, {
     timestamps:true
})

module.exports = model('Input', inputSchema)

