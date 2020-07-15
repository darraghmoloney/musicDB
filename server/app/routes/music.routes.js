module.exports = (app) => {

  const music = require('../controllers/music.controllers.js')

  app.get('/', music.findAll)

  app.post('/', music.create)



}