const express = require('express')
const path = require('path')
const cookieParser=require("cookie-parser");
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









app.get('/', (req, res) => {
    

    res.render('ajax.html')
})

app.get('/ajax', (req, res) => {
    
    let person = {
        name:'dty',
        age:18,
        motto:'为人民服务'
    }
    res.send(JSON.stringify(person))
})







app.listen(port, () => console.log(`Example app listening on port ${port}!`))