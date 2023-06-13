const express = require("express")
const app = express()
const users = require("./users.json")
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const axios =require('axios')

app.get("/userinfo", (req, res) => {
    console.log('/userinfo');
	const user = users.find((u) => u.id == req.cookies.userId);
    console.log(user);
	if (!user) {
		return res.status(404).send("找不到该用户")
	}
	res.send(user)
})
app.get("/testaxios", (req, res) => {
    console.log(axios);
    res.send('success')
})
app.listen(9600, () => {
	console.log("服务器已启动，监听端口 9600")
	console.log("http://localhost:9600")
})
