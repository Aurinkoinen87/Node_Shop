const express = require('express')
const app = express()

app.use(express.static('public'))

const port = 3000


app.listen(port, ()=> console.log(`Server started on port ${port}`))


app.get('/', (req, res)=> {
    res.render('index.html')
})