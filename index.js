const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello World!')
})

app.listen(port, function(){
  console.log(`Example app listening on http://localhost:${port}`)
})