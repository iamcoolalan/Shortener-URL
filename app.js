//require packages used in project
const express = require('express')
const exhbs = require('express-handlebars')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

//setting view engine
app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//setting routes
app.use(routes)

//start and listen on the Express server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})