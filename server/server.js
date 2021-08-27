const http = require('http')
const fs = require('fs');

//
//'./test/data/song.js'
//

const server = http.createServer(function(request, response) {
  // none of these work :(
  //console.dir(request)
  //console.log(request.headers['access-control-request-method'])
  //console.dir(request.param)
  // request.on('headers', function(headers) {
  //   console.log({'headers':headers})
  // })

  request.on('data', function(data) {
    // this is the working logger
    console.log({'data':data.toString()})
    try{
      // TODO check a password
      var usableData = JSON.parse(data.toString());
      var password = usableData.password;
      var songId = usableData.songId;
      var song = usableData.data

      // get filename 
      // filename is just the title under the AT translation
      // AT, else grab EN, else whatever
      var filename;
      if(song.title['at']){
        filename = (song.title['at'])
      } else if (song.title['en']){
        filename = (song.title['en'])
      }else{
        // TODO check if this actually works
        for (const tag in song.title) {
          if (Object.hasOwnProperty.call(song.title, tag)) {
            const element = song.title[tag];
            filename = element
            break;
          }
        }
      }
      filename = filename.trim().concat('.js')

      var songData = ('export default ').concat(JSON.stringify(song))    
      
      if(password === 'password'){
      // write to file
      fs.writeFile(`./test/${filename}`, songData, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`${filename} was saved!`);
        }); 
      } else{
        console.log('Bad Password')
      }
      // rebuild??? server rebuild
      

      // TODO tell client that save worked?
      request.on('end', function() {
        response.end('post received')
      })
      // request.on('end', function() {
      //   console.log(data)
      //   response.writeHead(200, {'Content-Type': 'text/html'})
      //   response.writeHead(200)
      //   response.end('post received')
      // })
   }catch(e){
     console.error(e)
   }
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
      response.writeHead(200, {'Content-Type': 'text/html'})
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