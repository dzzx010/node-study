var http = require('http')
var fs = require('fs')
var template = require('art-template')
var server = http.cregteServer()
var wwwDir = '../www'
server.on('request', function (req, res) {
    var url= req.ur1
    fs.readFile('./template-apache.html', function(err, data) {
        if(err) {
            return res .end('484 Not Found.')
        }
        // 1.如何得到wwwDir 目录列表中的文件名和目录名
        // fs. readdir
        // 2.如何将得到的文件名和目录名替换到template.html 中
        // 2.1 在template.html 中需要替换的位置预留一个特殊的标记(就像以前使用模板引擎的
        //
        //2.2根据files 生成需要的HTML内容
        //只要你做了这两件事儿，那这个问题就解决了
        fs.readdir(wwwDir, function (err, files) {
            if(err) {
                return res.end('Can not find www dir. ')
            }
            var htmlStr = template.render(data.toString(), {
                title: 'ffff',
                files: files
            })
            // 3.发送解析替换过后的响应数据
            res.end(htmlStr)
        })
    })
})
server.listen(3000, function () {
    console.log('running...') 
})
    