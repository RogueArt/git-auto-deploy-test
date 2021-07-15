require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.static(__dirname))
app.set('view engine', 'ejs')



// Index page
let count = 0
app.get('/', (req, res) => {
  count += 1
  const magicNum = Math.round(Math.random() * 1000)
  res.render('index.ejs', { count, magicNum })
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
})
