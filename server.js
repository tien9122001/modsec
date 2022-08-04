const express = require('express')
const app = express()

const PORT = 3000


app.get('/', (req, res) => {
    res.send(req.query.q)
})


app.listen(PORT, ()=>{
    console.log('Server is start');
})