
 

const express = require('express')

const app = express()
const PORT = 4000

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `)
// })
const port = process.env.PORT || 8000;


app.listen(port, function check(error) {
  if (error) {
    console.log('Erro:', error);
  } else {
    console.log('Server Started');
  }
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/ping',(req, res)=>{
  res.send('Pong 🍫');
})


app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app