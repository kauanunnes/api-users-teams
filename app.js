const express = require('express')
const app = express()
const router = require('./src/routes/index')
const port = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.use('/', router)

app.listen(port, () => {
  console.log(`Your server is running on http://localhost:${port}`);
})