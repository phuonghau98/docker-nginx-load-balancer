const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.send('<h1>Hello there, this is the index page<h1>')
		console.log('I got GET request')
    res.end()
})

app.listen(3000, () => console.log('Listening on port 3000...'))
