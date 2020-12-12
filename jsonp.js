const express = require('express')
const path = require('path')
const cookieParser=require("cookie-parser");
const fs = require('fs')
const app = express()
const port = 80
app.use(express.static('public'))
app.use(cookieParser());

app.engine('html', require('express-art-template'));
app.set('views', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');









app.get('/js30_6.json', (req, res) => {
    
    fs.readFile('Public/js30_6.json',(err,data)=>{
        if (err) throw err
        res.send(data.toString())

    })
})









app.listen(port, () => console.log(`Example app listening on port ${port}!`))