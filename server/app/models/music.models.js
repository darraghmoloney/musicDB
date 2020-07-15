const mongoose = require('mongoose')

const MusicSchema = mongoose.Schema({
  artist: String,
  title: String,
  genre: String,
  year: Number
}, {
  timestamps: true,
  collection: 'music'
})

module.exports = mongoose.model('Music', MusicSchema)