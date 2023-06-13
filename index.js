const express = require("express")
const app = express()

app.get("/", (req, res) => {
})

app.listen(9600, () => {
	console.log("服务器已启动，监听端口 9600")
})
