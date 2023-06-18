const express = require("express")
const app = express()
const users = require("./users.json")
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const axios =require('axios')

app.get("/userinfo", (req, res) => {
    console.log('/userinfo');
    if(!req.cookies.userId){
        return res.status(200).send({
            // 未登录
            code:'401'
        })
    }
	const user = users.find((u) => u.id == req.cookies.userId);
	res.send({
        code: '200',
        data: user,
    });
})
app.get("/testaxios", (req, res) => {
    console.log(axios);
    res.send('success')
})
app.listen(9600, () => {
	console.log("服务器已启动，监听端口 9600")
	console.log("http://localhost:9600")
})
