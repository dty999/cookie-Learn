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
    
        //获取cookie信息
        console.log('Cookies: ', req.cookies);//是一个对象
        // 通过设置cookie过期清除客户端cookie
        for(key of Object.keys(req.cookies)){
            res.cookie(key.toString(),req.cookies[key].toString(),{expires:new Date(0)})
        }
        //设置cookie
        //参数一表示，cookie名称
        //参数二表示，cookie的值
        //参数三表示，cookie的配置选项
        // domain 域名
        // path 路径
        // expires 过期时间
        // maxAge 有效时间(以毫秒为单位)
        // httpOnly 只能由web服务器访问
        // secure 是否与https一起使用
        // signed 是否签名
        res.cookie('test', 'test', {path: '/', expires: new Date(Date.now() + 120 * 1000)});
    
        res.cookie('name', 'dty', {maxAge: 120 * 1000});

    //写cookie是需要指定目录的，不指定目录就是根目录,因为并不是都存在一起的。所以会涉及到访问的可见性，比如 /aaa 下面的cookie需要在/aaa目录才能看到,也就是说，下面的目录可以访问上面的cookie    
    res.render('index.html')
})









app.listen(port, () => console.log(`Example app listening on port ${port}!`))