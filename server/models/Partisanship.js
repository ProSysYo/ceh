const {Schema, model} = require('mongoose')
const {check} = require('express-validator')

const partisanshipValidate = [
    check('name', 'Не может быть пустым').notEmpty(),     
]

const partisanshipSchema = new Schema({
    name: {type: String, unique: true, required: true},
})

const Partisanship = model('Partisanship', partisanshipSchema)

module.exports = { Partisanship, partisanshipValidate }