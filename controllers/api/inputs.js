require('dotenv').config()
const Input = require('../../models/input')
const User = require('../../models/user')

const destroyInput = async (req, res, next) => {
     try {
          const deletedInput = await
               Input.findByIdAndDelete(req.params.id)
          res.locals.data.input = deletedInput
          next()
     } catch (error) {
          res.status(400).json({ mes: error.message })
     }
}
const updateInput = async (req, res, next) => {
     try {
          const updatedInput = await
               Input.findByIdAndUpdate(req.params.id, req.body, {
               })
          res.locals.data.input = updatedInput
          next()
     } catch (error) {
          res.status(400).json({ mes: error.message })
     }
}
const createInput = async (req, res, next) => {
     try {
         const createdInput = await Input.create(req.body)
         const user = await User.findOne({ email: res.locals.data.email })
         user.inputs.addToSet(createdInput)
         await user.save()
         res.locals.data.Input = createdInput
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const respondWithInput = (req, res) => {
     res.json(res.locals.data.item)
 }
 module.exports = {
     destroyInput, 
     updateInput,
     createInput, 
     respondWithInput
 }