const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')


const cors=require('cors')

const db=require('./config/connect.js')


const app = express()

const portNum = 6000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

mongoose.connect(db.database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(()=> {
  console.log(`Connected to mongoDB`)
}).catch(err=> {
  console.error(`Failed to connect to mongoDB`)
  process.exit()
})

require('./app/routes/music.routes.js')(app)

app.listen(portNum, ()=> {
  console.log(`Listening on port ${portNum}`)
})
