const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const mime = require('./mime') // 文件类型
const compress = require('./compress') // 压缩文件
const range = require('./range') // range范围请求
const isFresh = require('./cache') // 缓存

// 拼接成绝对路径
const tplPath = path.join(__dirname, '../template/dir.tpl')
// 读取文件内容，读取出来的内容是 Buffer 对象，读取 Buffer 速度相对快
// const source = fs.readFileSync(tplPath, 'utf8')
const source = fs.readFileSync(tplPath)
// 编译模板文件为 HTML
const template = Handlebars.compile(source.toString())

module.exports = async function (req, res, filePath, config) {
  try {
    const stats = await stat(filePath)

    if (stats.isFile()) {

      const contentType = mime(filePath)
      res.setHeader('Content-Type', contentType)

      if (isFresh(stats, req, res)) {
        res.statusCode = 304
        res.end()
        return;
      }

      let rs;
      // 使用 curl 测试 range范围请求 获取部分内容  curl -r 0-5 -i  http://127.0.0.1:9989/src/app.js
      const { code, start, end } = range(stats.size, req, res)
      if (code === 200) {
        res.statusCode = 200
        rs = fs.createReadStream(filePath)
      } else {
        res.statusCode = 206
        rs = fs.createReadStream(filePath, { start, end })
      }

      // 压缩文件
      if (filePath.match(config.compress)) {
        rs = compress(rs, req, res)
      }
      rs.pipe(res)

    } else if (stats.isDirectory()) {

      const files = await readdir(filePath)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')

      const dir = path.relative(config.root, filePath)
      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files: files.map(file => {
          return {
            file,
            icon: mime(file)
          }
        })
      }
      res.end(template(data))
    }
  } catch (ex) {
    console.error(ex);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not a directory or file.\n${ex}`);
  }
}