const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

 app.use(morgan('combined'))

app.get('/', (req, res) => {
    return res.send(`
      <h2>Hello world</h2>
      <h1 style="color: red;">Helo NodeJs</h1>
    `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})