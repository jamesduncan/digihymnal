//const dirTree = require("directory-tree");
var fs = require('fs');
// opens file, returns array.
function openFile(path){
	//var fs = require('fs');
	return fs.readFile(path, 'ucs2', function(err, data) {
		if (err) throw err;
		return(data);
	})
}

console.log(
	fs.readFileSync("./samples/songbooks/AT.mini.txt", 'ucs2', function(err, data) {
   	if (err) throw err;
   	return(data);
   })
)
console.log(openFile("./samples/songbooks/AT.mini.txt"))
// mark each array with location of verses and new songs?
openFile("./samples/songbooks/AT.mini.txt").then(result => {
	console.log('hi')
	console.log({'result is': result})
	writeToFile({result}, "at")
}).catch(err => {
	console.err(err)
})