## static
koa-static
为什么要配置
静态资源：图片 html css js
不会随着服务运行改变内容
assets 资源

## path
path.join 将路径的各个部分链接起来 处理了各个平台的分割符号 Windows: \ 类unix /

## formidable
fields 非[type="file"] 提交的内容都会到file[type="file"]

## 静态资源服务
双击打开：
file://XXXXXXXXXX 本地文件读取
服务器：
http://localhost:9090
<!-- 访问图片的时候 发了一个请求 -->
html 里面引入的 图片 js css 都会发出一个请求。然后这些都是静态资源，所以 url 和 服务器磁盘路径 一一对应
1. 有 index.html的时候会自动打开 /自己加上index.html
2. 没有 列出所有文件，文件夹 fs.readDir()
3. 用kao-static 的作用就是在html里面正确引入所指定目录下的资源
处理static目录下的资源映射为请求路径
/static/1.png 返回 1.png 的内容
/static/2.png 返回 2.png 的内容
(koa-static)
业内擅长静态的服务器： Nginx