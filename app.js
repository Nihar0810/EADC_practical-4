var express = require ('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname+'/public')))
console.log(__dirname)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public', 'index.html','style.css'))
})
app.get('/home', (req, res) => {
  res.send('Home page')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})