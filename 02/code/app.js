// app application 应用程序
//把当前模块所有的依赖项都声明再文件模块最上面
//为了让目录结构保持统一清晰，所以我们约定，把所有的HTML 文件都放到views (视图)
var http=require('http')
var fs = require('fs')
http
.createServer(function (req, res) {
var url=req.url
if (url === '/') {
    fs.readFile('./views/index.html', function (err, data) {
        if (err) {
            return res.end('404 not found.')
        }
        res.end(data)
    })
}
})
.listen(3000, function() {
    console.log('running...')
})
