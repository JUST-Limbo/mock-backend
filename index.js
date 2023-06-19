const express = require("express")

const app = express()
const users = require("./users.json")
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const axios =require('axios')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const cors = require("cors")
app.use(cors())

app.get("/userinfo", (req, res) => {
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

app.post('/queryuserlist',(req, res) => {
    // 从请求体中获取 page 和 id 参数
    const { page = 1, name,pageSize = 10 } = req.body;

    // 根据 id 过滤 users 数组
    const filtered = name ? users.filter(u => u.name === name) : users;

    // 计算 start 和 end
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    // 构造响应结果
    const result = {
        total: filtered.length,
        pageSize,
        pageCount: Math.ceil(filtered.length / pageSize),
        page: page,
        data: filtered.slice(start, end),
    };
	res.send({
        code: '200',
        data: result,
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
