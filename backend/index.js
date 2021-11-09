const express = require('express')
const app = express()
const port = 5000
const fs = require('fs')


app.get('/',(req,res)=>{
    res.end("hello BAanty Rajawat")
})

app.get('/list_movies',(req,res)=>{
    fs.readFile(__dirname  + '/' + 'movies.json','utf-8',(err,data)=>{
        res.end(data)
    })
})

app.listen(port,()=>{
    console.log(`app listening on ${port}`);
})