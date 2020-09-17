const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  legend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Legend',
    required: true
  },
  win: {
    type: Boolean,
    required: true
  },
  kills: {
    type: Number,
    required: true
  },
  damage: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
