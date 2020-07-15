const Music = require('../models/music.models.js')

exports.create = (req, res) => {

  if(!req.body.artist && !req.body.title) {
    return res.status(400).send({
      message: `Missing artist and/or title info to add new music`
    })
  }

  let musicToAdd = new Music({
    artist: req.body.artist,
    title: req.body.title,
    genre: req.body.genre || "",
    year: req.body.year || ""
  })

  musicToAdd.save()
  .then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: `Failed to add new music`
    })
  })

  

}


exports.findAll = (req, res) => {

  Music.find()
  .then(music => {
    res.send(music)
  }).catch(err => {
    res.status(500).send({
      message: `Failed to get all music`
    })
  })

}