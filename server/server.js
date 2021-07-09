const http = require('http')
//
//'./test/data/song.js'
//

const server = http.createServer(function(request, response) {
  //console.dir(request)
  console.dir(request.param)
  console.log(request.headers['access-control-request-method'])
  request.on('data', function(data) {
    console.log({'data':data.toString()})
  })
  request.on('param', function(param) {
    console.log({'param':param})
  })

  // if (request.method == 'POST') {
  if (request.headers['access-control-request-method'] == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      console.log(data)
    })
    request.on('end', function() {
      console.log(data)
      // response.writeHead(200, {'Content-Type': 'text/html'})
      response.writeHead(200)
      response.end('post received')
    })
  }// else {
    // console.log('GET')
    // var html = `
    //         <html>
    //             <body>
    //                 <form method="post" action="http://localhost:8080">Name: 
    //                     <input type="text" name="name" />
    //                     <input type="submit" value="Submit" />
    //                 </form>
    //             </body>
    //         </html>`
    // response.writeHead(200, {'Content-Type': 'text/html'})
    // response.end(html)
  //}
})

const port = 8081
const host = '127.0.0.1'
server.listen(port, host )
console.log(`Listening at http://${host}:${port}`)