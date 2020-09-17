const mongoose = require('mongoose')

const legendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Legend', legendSchema)
