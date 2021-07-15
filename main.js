require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.static(__dirname))
app.set('view engine', 'ejs')

const people = ['a', 'b', 'c']
let count = 0

// Index page
app.get('/', (req, res) => {
  count += 1
  res.render('index.ejs', { people, count })
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
})
