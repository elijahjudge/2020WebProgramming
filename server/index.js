const express = require ('express')

const users = require('./controllers/users');

const app = express()
const port = 3000;

app.get('/', (req, res) => {
res.send('hello friend, your not welcome' + req.url)
})

app.use('/users', users);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})