//const dirTree = require("directory-tree");
var fs = require('fs');
const { stringify } = require("querystring");
var parseDir = function (path) {
  // an npm module that makes a tree out of a dir
  var currDir = dirTree(path);
  //return currDir
  currDir.children.forEach(element => {
    openFile(element.path)
  });
};
// opens file, returns array.
function openFile(path){
	//var fs = require('fs');
	return fs.readFileSync(path, 'ucs2')
}

// convert very long string into array
// array of each new line
function stringToArray(longString){
    // Clean any un-needed characters
    function cleanString(input) {
      // TODO strip out all '/t'
		input = input.replace(/([\t])/g, '');
		// this fixes the splitter, I don't know why
		input = input.replace(/([\r])/g, '');
		// TODO remove empty line? no idea if really working
		input = input.replace(/^\s*[\r\n]/gm)
		// var output = ''
      // for (var i=0; i<input.length; i++) {
      //  if (input.charCodeAt(i) <= 127) {
      //    output += input.charAt(i);
      //  }
      // }
      // return output;
		return input;
 	}
  	longString = cleanString(longString)
  	return longString.split(/\r?\n/)
}

// get real data from text files
var converted2 = stringToArray(openFile("./samples/songbooks/KT.txt"))
var converted3 = stringToArray(openFile("./samples/songbooks/CT.txt"))
var converted1 = stringToArray(openFile("./samples/songbooks/AT.txt"))

// mark each array with location of verses and new songs?

// iterate through each array
var mainApp = function (converted1, converted2, converted3){

	//single iterate through all files
	for (var index = 0; index < converted1.length; index++) {
		var line1 = converted1[index];
		var line2 = converted2[index];
		var line3 = converted3[index];

		
		let metadataTokens = ["(","(","1","2","3"]
		if(metadataTokens.includes(line1[0]) || metadataTokens.includes(line1[1])){ // if we got some meta data 
			let line1Title = line1.slice(1, 2)
			let line1Default = line1.slice(0, 1)
			if(line1Default != line2.slice(0, 1) && line1Default != line3.slice(0, 1)){
				if(line1Title == line2.slice(0, 1) && line1Title == line3.slice(0, 1)){
					continue
				}
				fs.appendFileSync((`./json/combined.json`), JSON.stringify({index,
																						CT:line1,
																						KT:line2,
																						AT:line3}), 
					function(err) {
						if (err) {
							console.log(err);
						}
				});
			}
			continue; // exit the loop, data has been captured
		}		 

		continue
		
	}
}

// call the main function
console.log(mainApp(converted1, converted2, converted3))


