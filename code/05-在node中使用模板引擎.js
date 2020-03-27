// art-template
// art-template 不仅可以在浏览器使用，也可以在node中使用
//安装:
//npm install art-template
//该命令在哪执行就会把包下载到哪里。默认会下载到node. modules目录中
//node_ modul es不要改，也不支持改。
//在Node 中使屋art-template 模板引擎
//模板引起最早就是诞生于服务器领域，后来才发展到了前端。
// 1.安装npm install art-template
// 2.在需要使用的文件模块中加载art-template
//只需要使用 require 方法加载就可以了: require(' art-template')
//参数中的art-template 就是你下载的包的名字
//也就是说你 isntall 的名字是什么，则你require 中的就是什么
// 3.查文档，使用模板引擎的API
var template = require('art-template')
var fs = require('fs')
//这里不是浏览器
// template('script标签id', {对象})I
//template.render('模板字符串'，替换对象)

var tplStr =`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<p>大家好，我叫: { name }}</p>
<p>我今年《{ age }}岁了</p>
<h1>我来自{ province }}</h1>
<p>我喜欢: {each hobbies}} {{ $value }} {{/each}}</p>
</body>
</html>`

fs.readFile(' ./tpl.html', function (err, data) {
    if (err) {
        return console.log('读取文件失败了')
    }
    // data是二进制
    // render 需要字符串
    // var ret = template.render(tplStr, { 
    var ret = template.render(data.toString(), { 
        name:'Jack',
        age: 18,
        province: '北京市',
        hobbies: [
        '写代码',
        '唱歌',
        '打游戏'
        ]
    })
    console.log(ret)
})
    


