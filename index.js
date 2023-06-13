const express = require("express")
const app = express()
const users = require("./users.json")

app.get("/userinfo", (req, res) => {
	const userId = req.params.id
	const user = users.find((u) => u.id == userId)
	if (!user) {
		return res.status(404).send("找不到该用户")
	}
	res.send(user)
})
app.listen(9600, () => {
	console.log("服务器已启动，监听端口 9600")
	console.log("http://localhost:9600")
})
