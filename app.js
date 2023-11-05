const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/', (req, res) => {
    res.sendFile(__dirname + '/public/post/index.html')
})
app.listen(port, () => {
    console.log(`app listening on http://localhost:${3000}`)
})