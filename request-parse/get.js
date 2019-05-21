// http
const http = require('http');
const url = require('url');
const qs = require('querystring')

http.createServer((req,res)=>{
    //自己的服务器
    if(req.url == '/favicon.ico')return;
    // 把 url 解析成一个对象
    const reqObj = url.parse(req.url);
    // get 请求在 query 属性
    const queryObj = qs.parse(reqObj.query);
    console.log('正在请求',queryObj);
    res.writeHead(200,{
      'Content-Type': 'text/plain;charset=utf-8'
    })
    res.end(JSON.stringify(queryObj));
}).listen(3000,()=>{
    console.log('服务正在 3000 端口运行');
})
