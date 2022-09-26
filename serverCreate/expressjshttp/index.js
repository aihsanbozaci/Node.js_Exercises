const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).send('Hello World!')
})

app.get('/about', function (req, res) {
    res.status(200).send('About Page!')
})

app.get('/contact', function (req, res) {
    res.status(200).send('Contact Page!')
})

app.get('*',(req,res)=>{
    res.status(404).send('404 Page Not Found')
})

const port = 3000;

app.listen(port, () =>{
    console.log(`Server created at port ${port}`)
});