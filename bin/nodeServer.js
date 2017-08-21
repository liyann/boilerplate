const PORT = 3000
const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
var server = http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname
  var realPath = '../public' + pathname
  realPath = path.resolve(__dirname, realPath)
  fs.exists(realPath, function(exists) {
    if (!exists) {
      response.writeHead(404, {
        'Content-Type': 'text/plain'
      })

      response.write(
        'This request URL ' + pathname + ' was not found on this server.'
      )
      response.end()
    } else {
      fs.readFile(realPath, function(err, file) {
        if (err) {
          response.writeHead(500, {
            'Content-Type': 'text/plain'
          })

          response.end(err)
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          })

          response.write(file, 'binary')

          response.end()
        }
      })
    }
  })
})

server.listen(PORT, () => {
  console.log('====================================')
  console.log(`open http://localhost:3000`)
  console.log('====================================')
})

function Helo(name, age) {
  return 'hello'
}
